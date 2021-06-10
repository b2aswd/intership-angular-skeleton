import {Component} from '@angular/core';

@Component({
    selector: 'b2a-auth',
    template: `
        <nb-layout>
            <nb-layout-column>
                <router-outlet></router-outlet>
            </nb-layout-column>
        </nb-layout>
    `,
    styleUrls: ['./b2a-auth.component.scss'],
})
export class B2aAuthComponent {}
