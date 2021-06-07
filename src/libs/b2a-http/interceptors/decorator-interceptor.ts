import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_URL} from '../b2a-http-tokens';

@Injectable()
export class DecoratorInterceptor implements HttpInterceptor {
    constructor(@Inject(API_URL) private API_URL: string) {}
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest.clone({url: this.API_URL + '' + httpRequest.url}));
    }
}
