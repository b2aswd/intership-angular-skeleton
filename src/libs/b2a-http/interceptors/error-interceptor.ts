import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NbToastrService} from '@nebular/theme';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {B2aAuthService} from '../../b2a-auth/b2a-auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private _b2aAuthService: B2aAuthService,
        private _nbToastrService: NbToastrService,
    ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                        return this._error401(error);
                    } else {
                        return this._error(error);
                    }
                }
                return this._error(error);
            }),
        );
    }

    /**
     * NOTE: usefull for OAuth or JWT error 401, auth related 401 errors
     */
    private _error401(error: HttpErrorResponse) {
        const msg = error.error?.messages?.[0] ?? null;
        // inform user
        if (msg) {
            this._nbToastrService.danger(msg, 'ERROR');
        }
        // logout user
        this._b2aAuthService.logoutAndRedirect();
        // next error
        return throwError(error);
    }

    /**
     * General Error handler
     */
    private _error(error: HttpErrorResponse) {
        // inform user
        this._nbToastrService.danger('HTTP ERROR', 'ERROR');
        // next error
        return throwError(error);
    }
}
