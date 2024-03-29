/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthService, NbAuthResult, NbAuthJWTToken } from '@nebular/auth';
import { runInThisContext } from 'node:vm';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { authSettings } from '../../access.settings';
import { getDeepFromObject } from '../../helpers';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { UserStore } from '../../../@core/stores/user.store';

@Component({
  selector: 'ngx-reset-password-page',
  styleUrls: ['./reset-password.component.scss'],
  templateUrl: './reset-password.component.html', 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxResetPasswordComponent implements OnInit {
  minLength: number = this.getConfigValue('forms.validation.password.minLength');
  maxLength: number = this.getConfigValue('forms.validation.password.maxLength');
  redirectDelay: number = this.getConfigValue('forms.resetPassword.redirectDelay');
  showMessages: any = this.getConfigValue('forms.resetPassword.showMessages');
  strategy: string = this.getConfigValue('forms.resetPassword.strategy');
  isPasswordRequired: boolean = this.getConfigValue('forms.validation.password.required');

  private alive = true;

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  userId: string;
  resetPasswordForm: FormGroup;

  constructor(protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected fb: FormBuilder,
    protected router: Router,
    private route: ActivatedRoute,
    private userStore: UserStore,
    private api: HttpService,
    private apiGetComp: ApiGetService,

  ) {
    this.userId = this.route.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    const passwordValidators = [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ];
    this.isPasswordRequired && passwordValidators.push(Validators.required);

    this.resetPasswordForm = this.fb.group({
      password: this.fb.control('', [...passwordValidators]),
      confirmPassword: this.fb.control('', [...passwordValidators]),
    });
  }

  get password() { return this.resetPasswordForm.get('password'); }
  get confirmPassword() { return this.resetPasswordForm.get('confirmPassword'); }

  resetPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.user = this.resetPasswordForm.value;
this.user.password += ';' + this.userId; 

const currentUserId = this.userStore.getUser().id;
const currentUser = this.userStore.getUser().firstName;
  // console.log("este es el usuario: ",this.userStore.getUser().firstName);
  var respons = 
  {
    user: currentUser,
    message:"Cambio la contraseña",
    users: currentUserId,  
};
  this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/postSaveAlarmUser', respons)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
        //  console.log("Envió: ", res);
      });
      
    this.service.resetPassword(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect(); 
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl('/pages/users/list');
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
