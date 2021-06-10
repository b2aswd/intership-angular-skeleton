import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {B2aAuthComponent} from './b2a-auth.component';
import {B2aAuthLoginComponent} from './b2a-auth-login/b2a-auth-login.component';

export const routes: Routes = [
    {
        path: '',
        component: B2aAuthComponent,
        children: [
            {
                path: 'login',
                component: B2aAuthLoginComponent,
            },

            // NOTE: we can add more routes like request-password, reset-password etc.

            {path: '', redirectTo: 'login', pathMatch: 'full'},
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class B2aAuthRoutingModule {}
