import {NgModule} from '@angular/core';
import {B2aUserComponent} from './b2a-user.component';
import {CommonModule} from '@angular/common';
import {NbCardModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule, NbCardModule, RouterModule],
    exports: [B2aUserComponent],
    declarations: [B2aUserComponent],
})
export class B2aUserModule {}
