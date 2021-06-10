import {Component} from '@angular/core';
import {B2aAuthService} from '../../libs/b2a-auth/b2a-auth.service';

@Component({
    selector: 'secure',
    template: `
        <nb-layout>
            <nb-layout-column class="b2a-layout">
                <nav>
                    <div class="logo">
                        <img src="/assets/images/b2a-logo.png" alt="B2A logo" style="width: 70px" />
                    </div>
                    <ul>
                        <li>
                            <a [routerLink]="['./messenger']" routerLinkActive="active">
                                <nb-icon icon="at-outline"></nb-icon>
                                <span>Messenger</span>
                            </a>
                        </li>
                        <li>
                            <a [routerLink]="['./users']" routerLinkActive="active">
                                <nb-icon icon="people-outline"></nb-icon>
                                <span>Uživatelé</span>
                            </a>
                        </li>
                        <li class="logout">
                            <a href="" (click)="authService.logoutAndRedirect(); (false)">
                                <nb-icon icon="power-outline"></nb-icon>
                                <span>Odhlásit se</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <section>
                    <router-outlet></router-outlet>
                </section>
            </nb-layout-column>
        </nb-layout>
    `,
})
export class SecureComponent {
    constructor(public authService: B2aAuthService) {}
}
