import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbCardModule, NbIconModule, NbLayoutModule} from '@nebular/theme';
import {B2aAuthModule} from '../../libs/b2a-auth/b2a-auth.module';
import {B2aUserModule} from './pages/b2a-user/b2a-user.module';
import {SecureRoutingModule} from './secure-routing.module';
import {SecureComponent} from './secure.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NbLayoutModule,
        NbCardModule,
        NbIconModule,
        SecureRoutingModule,
        B2aAuthModule,
        B2aUserModule,
    ],
    declarations: [SecureComponent],
})
export class SecureModule {}
