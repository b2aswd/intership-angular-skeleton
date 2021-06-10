import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {B2aAuthService} from '../b2a-auth.service';
import {SECURE_REDIRECT_URL} from '../b2a-auth-tokens';

@Injectable({providedIn: 'root'})
export class B2aAuthPageGuard implements CanActivate {
    constructor(
        @Inject(SECURE_REDIRECT_URL) private SECURE_REDIRECT_URL: string,
        private _b2aAuthService: B2aAuthService,
        private _router: Router,
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._b2aAuthService.isAuthenticated()
            ? // default redirect url is /secure
              this._router.createUrlTree([this.SECURE_REDIRECT_URL || '/secure'])
            : true;
    }
}
