import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure} from 'firebaseui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
  
})
export class AppComponent {
  constructor(private afAuth: AngularFireAuth) {
  }

  title = 'app';
  logout() {
    this.afAuth.auth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }
}
