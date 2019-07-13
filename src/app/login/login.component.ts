import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loggedinInfo: any;

  constructor(private afAuth: AngularFireAuth) { }

  // login() {
  //   this.afAuth.auth.signInWithEmailAndPassword("kartikmishra@gmail.com","kartikmishra")
  //   .then(value => {
  //     this.loggedinInfo = value;
  //   })
  //   .catch(reason => {
  //     console.log(reason);
  //   });    
  // }

  login(form: NgForm) {
    console.log(form);
  }

}
