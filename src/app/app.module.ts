import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import {
  AuthMethods,
  AuthProvider,
  AuthProviderWithCustomConfig,
  CredentialHelper,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from 'firebaseui-angular';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
const goolgeOneTapConfiguration: AuthProviderWithCustomConfig = {
  provider: AuthProvider.Google,
  customConfig: {
    authMethod: 'https://accounts.google.com',
    clientId: '243805104182-aobd4t3ed6nm1hcqp3j1cq23pkq37uou.apps.googleusercontent.com'
  }
};

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    goolgeOneTapConfiguration,
    AuthProvider.Password
  ],
  method: AuthMethods.Popup,
  tos: '<your-tos-link>',
  credentialHelper: CredentialHelper.OneTap,
  autoUpgradeAnonymousUsers: false,
  disableSignInSuccessCallback: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
