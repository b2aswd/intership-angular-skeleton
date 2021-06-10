import {NgModule} from '@angular/core';
import {B2aAuthComponent} from './b2a-auth.component';
import {CommonModule} from '@angular/common';
import {NbCardModule, NbLayoutModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import {B2aAuthLoginModule} from './b2a-auth-login/b2a-auth-login.module';
import {B2aAuthRoutingModule} from './b2a-auth-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NbCardModule,
        NbLayoutModule,
        RouterModule,
        B2aAuthLoginModule,
        B2aAuthRoutingModule,
    ],
    exports: [B2aAuthComponent],
    declarations: [B2aAuthComponent],
})
export class B2aAuthModule {}
