import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {B2aAuthPageGuard} from '../libs/b2a-auth/guards/b2a-auth-page-guard';
import {B2aSecurePageGuard} from '../libs/b2a-auth/guards/b2a-secure-page-guard';

const routes: Routes = [
    {
        path: 'auth',
        canActivate: [B2aAuthPageGuard],
        loadChildren: () => import('../libs/b2a-auth/b2a-auth.module').then((m) => m.B2aAuthModule),
    },
    {
        path: 'secure',
        canActivate: [B2aSecurePageGuard],
        loadChildren: () => import('../app/secure/secure.module').then((m) => m.SecureModule),
    },
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
