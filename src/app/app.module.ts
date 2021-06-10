import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DecoratorInterceptor} from '../libs/b2a-http/interceptors/decorator-interceptor';
import {API_URL} from '../libs/b2a-http/b2a-http-tokens';
import {environment} from '../environments/environment';
import {AuthInterceptor} from '../libs/b2a-http/interceptors/auth-interceptor';
import {B2aAuthLoginModule} from '../libs/b2a-auth/b2a-auth-login/b2a-auth-login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbToastrModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {SECURE_REDIRECT_URL, AUTH_REDIRECT_URL} from '../libs/b2a-auth/b2a-auth-tokens';
import {ErrorInterceptor} from '../libs/b2a-http/interceptors/error-interceptor';
import {LoadingInterceptor} from '../libs/b2a-http/interceptors/loading-interceptor';
import {B2aLoadingBarModule} from '../libs/b2a-loading-bar/b2a-loading-bar.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        B2aAuthLoginModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({name: 'default'}),
        NbToastrModule.forRoot(),
        NbLayoutModule,
        NbEvaIconsModule,
        B2aLoadingBarModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: DecoratorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
        {provide: API_URL, useValue: environment.api},
        {provide: AUTH_REDIRECT_URL, useValue: '/auth'},
        {provide: SECURE_REDIRECT_URL, useValue: '/secure'},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
