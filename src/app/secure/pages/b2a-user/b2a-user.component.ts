import {Component} from '@angular/core';
import {B2aUserResourceService} from '../../../../libs/@api/api-resource/b2a-user-resource.service';

@Component({
    selector: 'b2a-user',
    templateUrl: './b2a-user.component.html',
})
export class B2aUserComponent {
    userList$ = this._b2aUserResourceService.listAction();

    constructor(private _b2aUserResourceService: B2aUserResourceService) {}
}
