import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {B2aUserResourceService} from '../../@api/api-resource/b2a-user-resource.service';
import {B2aAuthService} from '../b2a-auth.service';
import {Router} from '@angular/router';
import {SECURE_REDIRECT_URL} from '../b2a-auth-tokens';

@Component({
    selector: 'b2a-auth-login',
    styleUrls: ['./b2a-auth-login.component.scss'],
    template: `
        <nb-card style="border:0">
            <nb-card-body>
                <h1>Přihlášení</h1>
                <form
                    [formGroup]="formGroup"
                    (ngSubmit)="login(formGroup.value.email, formGroup.value.password)"
                >
                    <div class="form-control">
                        <label class="label" for="email">Email</label>
                        <input
                            nbInput
                            fullWidth
                            formControlName="email"
                            type="email"
                            placeholder="Zadejte email"
                            autofocus
                        />
                    </div>
                    <div class="form-control">
                        <label class="label" for="password">Heslo</label>
                        <input
                            nbInput
                            fullWidth
                            formControlName="password"
                            type="password"
                            placeholder="Zadejte heslo"
                        />
                    </div>
                    <div>
                        <button nbButton fullWidth type="submit">Přihlásit se</button>
                    </div>
                </form>
            </nb-card-body>
        </nb-card>
    `,
})
export class B2aAuthLoginComponent {
    formGroup = this._formBuilder.group({
        email: '',
        password: '',
    });

    constructor(
        @Inject(SECURE_REDIRECT_URL) private SECURE_REDIRECT_URL: string,
        private _b2aAuthService: B2aAuthService,
        private _b2aUserAuthResourceService: B2aUserResourceService,
        private _formBuilder: FormBuilder,
        private _router: Router,
    ) {}

    /**
     * @param email admin@b2a.cz
     * @param password
     */
    login(email: string, password: string) {
        this._b2aUserAuthResourceService.login(email, password).subscribe(
            (user) => {
                this._b2aAuthService.setUser(user);
                this._router.navigate([this.SECURE_REDIRECT_URL]);
            },
            () => {
                this._b2aAuthService.logout();
            },
        );
    }
}
