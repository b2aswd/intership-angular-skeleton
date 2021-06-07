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

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, B2aAuthLoginModule],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: DecoratorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: API_URL, useValue: environment.api},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
