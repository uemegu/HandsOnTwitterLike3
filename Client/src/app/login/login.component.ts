import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private fireAuth: AngularFireAuth,
    private route: Router
  ) { }

  ngOnInit() {
  }

  async googeLogin() {
    const result = await this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    if(result.operationType === 'signIn') {
      this.route.navigate(['/list']);
    }
  }

}
