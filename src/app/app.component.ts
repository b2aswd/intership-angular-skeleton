import {ChangeDetectionStrategy, Component} from '@angular/core';
import {B2aUserResourceService} from '../libs/@api/api-resource/b2a-user-resource.service';
import {B2aAuthService} from '../libs/b2a-auth/b2a-auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    user$ = this._b2aAuthService.user$;
    userList$ = this._b2aUserResourceService.listAction();

    constructor(
        private _b2aUserResourceService: B2aUserResourceService,
        private _b2aAuthService: B2aAuthService,
    ) {}
}
