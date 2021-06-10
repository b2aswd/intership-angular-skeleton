import {Injectable, Inject} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {APISchema} from '../@api/api-objects/api-objects';
import {Router} from '@angular/router';
import {AUTH_REDIRECT_URL} from './b2a-auth-tokens';

@Injectable({providedIn: 'root'})
export class B2aAuthService {
    // NOTE: usually we split Auth & User services
    private readonly _idToken = 'id_token';
    private readonly _user = new BehaviorSubject<APISchema.B2aUser | null>(null);

    constructor(
        @Inject(AUTH_REDIRECT_URL) private AUTH_REDIRECT_URL: string,
        private _router: Router,
    ) {}

    get user$() {
        return this._user;
    }

    getAuthorizationToken() {
        return localStorage.getItem(this._idToken);
    }

    isAuthenticated() {
        return this.getAuthorizationToken() !== null;
    }

    setUser(value: APISchema.B2aUser) {
        // set user object
        this._user.next(value);
        // set token to a storage
        localStorage.setItem(this._idToken, value.apiKey as string);
    }

    logout() {
        this._user.next(null);
        localStorage.removeItem(this._idToken);
    }

    logoutAndRedirect() {
        this.logout();
        this._router.navigate([this.AUTH_REDIRECT_URL]);
    }
}
