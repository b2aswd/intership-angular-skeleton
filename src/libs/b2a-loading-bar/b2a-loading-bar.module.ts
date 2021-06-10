import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {B2aLoadingBarComponent} from './b2a-loading-bar/b2a-loading-bar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [B2aLoadingBarComponent],
    exports: [B2aLoadingBarComponent],
})
export class B2aLoadingBarModule {}
