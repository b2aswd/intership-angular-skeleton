import {Injectable} from '@angular/core';
import {B2aHttpClient} from '../../b2a-http/b2a-http.service';
import {APISchema} from '../api-objects/api-objects';

@Injectable({providedIn: 'root'})
export class B2aUserResourceService extends B2aHttpClient {
    static LIST_ACTION_URL = '/api/v1/user';
    static DETAIL_ACTION_URL = '/api/v1/user/:id';
    static LOGIN_ACTION_URL = '/api/v1/user/login';
    static REGISTER_ACTION_URL = '/api/v1/user/register';

    listAction(params?: Record<string, any>) {
        return this.get<APISchema.B2aUser[]>(B2aUserResourceService.LIST_ACTION_URL, {
            params: params,
        });
    }

    detailAction(id: number, params?: Record<string, any>) {
        return this.get(B2aUserResourceService.DETAIL_ACTION_URL.replace(':id', id.toString()), {
            params: params,
        });
    }

    login(email: string, password: string) {
        return this.post<APISchema.B2aUser>(B2aUserResourceService.LOGIN_ACTION_URL, {
            email: email,
            password: password,
        });
    }

    register(payload: {name: string; surname: string; email: string; password: string}) {
        return this.post<APISchema.B2aUser>(B2aUserResourceService.REGISTER_ACTION_URL, payload);
    }
}
