import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { NbButtonModule, NbInputModule, NbCardModule } from '@nebular/theme';
import {B2aAuthLoginComponent} from './b2a-auth-login.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, NbButtonModule, NbInputModule, NbCardModule],
    declarations: [B2aAuthLoginComponent],
    exports: [B2aAuthLoginComponent],
})
export class B2aAuthLoginModule {}
