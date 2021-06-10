import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
        <b2a-loading-bar></b2a-loading-bar>
        <router-outlet></router-outlet>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
