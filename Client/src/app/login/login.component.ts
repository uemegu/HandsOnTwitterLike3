import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // 追加
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'; // 追加
import { ErrorStateMatcher } from '@angular/material/core'; // 追加
import { AngularFireAuth } from '@angular/fire/auth'; // 追加
import { auth } from 'firebase/app'; // 追加

// 追加
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

  // 追加
  emailFormControl = new FormControl('', [
    Validators.email
  ]);

  // 追加
  matcher = new MyErrorStateMatcher();

  constructor(
    private fireAuth: AngularFireAuth, // 追加
    private route: Router // 追加
  ) { }

  ngOnInit() {
  }

  // 追加
  async googeLogin() {
    const result = await this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    if(result.operationType === 'signIn') {
      this.route.navigate(['/list']);
    }
  }

}
