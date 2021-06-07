import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {APISchema} from '../@api/api-objects/api-objects';

@Injectable({providedIn: 'root'})
export class B2aAuthService {
    private readonly _user = new BehaviorSubject<APISchema.B2aUser | null>(null);

    get user$() {
        return this._user;
    }

    getAuthorizationToken() {
        return this._user.value?.apiKey ?? null;
    }

    setUser(value: APISchema.B2aUser) {
        this._user.next(value);
    }

    clearUser() {
        this._user.next(null);
    }
}
