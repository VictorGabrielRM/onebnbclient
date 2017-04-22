import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, ResetPasswordData } from 'angular2-token';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) { }

  private _forgotPassword: ResetPasswordData  = <ResetPasswordData>{};
  private _output: any;

  ngOnInit() {
  }

  onSubmit() {

    this._output = null;

    this._tokenService.resetPassword({
          email: this._forgotPassword.email,
      }).subscribe(
          res =>      console.log(res),
          error =>    console.log(error)
    );

  }

}
