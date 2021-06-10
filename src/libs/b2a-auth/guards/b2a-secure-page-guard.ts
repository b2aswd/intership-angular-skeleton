import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {B2aAuthService} from '../b2a-auth.service';
import {AUTH_REDIRECT_URL, SECURE_REDIRECT_URL} from '../b2a-auth-tokens';

@Injectable({providedIn: 'root'})
export class B2aSecurePageGuard implements CanActivate {
    constructor(
        @Inject(AUTH_REDIRECT_URL) private AUTH_REDIRECT_URL: string,
        private _b2aAuthService: B2aAuthService,
        private _router: Router,
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return !this._b2aAuthService.isAuthenticated()
            ? // default redirect url is /secure
              this._router.createUrlTree([this.AUTH_REDIRECT_URL || '/auth'])
            : true;
    }
}
