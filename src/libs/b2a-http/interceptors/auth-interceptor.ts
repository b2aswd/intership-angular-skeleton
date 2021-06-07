import {Injectable} from '@angular/core';
import {B2aAuthService} from '../../b2a-auth/b2a-auth.service';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _auth: B2aAuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // get the auth token from the service.
        const authToken = this._auth.getAuthorizationToken();
        // send cloned request with header to the next handler.
        return next.handle(
            authToken
                ? req.clone({headers: req.headers.set('Authorization', `Basic ${authToken}`)})
                : req,
        );
    }
}
