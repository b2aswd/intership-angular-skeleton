import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {B2aUserResourceService} from '../../@api/api-resource/b2a-user-resource.service';
import {B2aAuthService} from '../b2a-auth.service';

@Component({
    selector: 'b2a-auth-login',
    template: `
        <form
            [formGroup]="formGroup"
            (ngSubmit)="login(formGroup.value.email, formGroup.value.password)"
        >
            <div>
                <label class="label" for="email">Email</label>
                <input
                    nbInput
                    fullWidth
                    formControlName="email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Zadejte email"
                    fieldSize="large"
                    autofocus
                />
            </div>
            <div>
                <label class="label" for="password">Heslo</label>
                <input
                    nbInput
                    fullWidth
                    formControlName="password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Zadejte heslo"
                    fieldSize="large"
                />
            </div>
            <div>
                <button type="submit">Přihlásit se</button>
            </div>
        </form>
    `,
})
export class B2aAuthLoginComponent {
    formGroup = this._formBuilder.group({
        email: '',
        password: '',
    });

    constructor(
        private _b2aAuthService: B2aAuthService,
        private _b2aUserAuthResourceService: B2aUserResourceService,
        private _formBuilder: FormBuilder,
    ) {}

    /**
     * @param email admin@b2a.cz
     * @param password
     */
    login(email: string, password: string) {
        this._b2aUserAuthResourceService.login(email, password).subscribe(
            (user) => {
                this._b2aAuthService.setUser(user);
            },
            () => {
                this._b2aAuthService.clearUser();
            },
        );
    }
}
