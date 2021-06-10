import {SecureComponent} from './secure.component';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {B2aUserComponent} from './pages/b2a-user/b2a-user.component';
import {B2aMessengerComponent} from './pages/b2a-messenger/b2a-messenger.component';

export const routes: Routes = [
    {
        path: '',
        component: SecureComponent,
        children: [
            {
                path: 'users',
                component: B2aUserComponent,
            },
            {
                path: 'messenger',
                component: B2aMessengerComponent,
            },
            {path: '', redirectTo: 'messenger', pathMatch: 'full'},
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SecureRoutingModule {}
