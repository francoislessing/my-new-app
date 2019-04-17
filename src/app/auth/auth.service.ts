import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import * as EmailValidator from 'email-validator';


@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
    this.token = this.makeId(10);//null;
  }

  private makeId(charCount: number) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < charCount; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  // signupUser(email: string, password: string) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .catch(
  //       error => console.log(error)
  //     )
  // }

  signinUser(email: string, password: string) {
    // May use this later on to do google login

    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(
    //     response => {
    //       this.router.navigate(['/']);
    //       firebase.auth().currentUser.getIdToken()
    //         .then(
    //           (token: string) => this.token = token
    //         )
    //     }
    //   )
    //   .catch(
    //     error => console.log(error)
    //   );

    // Set defualt result to 'password succeed' / password failed'
    this.token = null;

    // Validate password
    if(password === 'P@ssw0rd123') {

      // Validate email using regex
      var emailValidationResult = EmailValidator.validate(email);

      // If valid email, set token to non-null value
      if(emailValidationResult == true)  {
        this.token = this.makeId(10);
        this.router.navigate(['/'])
      }
    }    
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    // May use this later on to do google login

    // firebase.auth().currentUser.getIdToken()
    //   .then(
    //     (token: string) => this.token = token
    //   );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
