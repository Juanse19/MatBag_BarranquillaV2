/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  NB_AUTH_OPTIONS,
  NbAuthSocialLink,
  NbAuthService,
  NbAuthResult,
} from "@nebular/auth";
import { getDeepFromObject } from "../../helpers";
import { NbThemeService } from "@nebular/theme";
import { EMAIL_PATTERN } from "../constants";
import { InitUserService } from "../../../@theme/services/init-user.service";
import { takeWhile } from "rxjs/operators";
import { UserStore } from "../../../@core/stores/user.store";
import { HttpService } from "../../../@core/backend/common/api/http.service";
import { ApiGetService } from "../../../@core/backend/common/api/apiGet.services";
import { NbToastrService } from "@nebular/theme";
import Swal from "sweetalert2";
import { interval, Subscription } from "rxjs";

interface dataLicens {
  Id: number;
  Lat: number;
  States: number;
  Licens_id: string;
}
@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLoginComponent implements OnInit {
  // correo = "mladmin@matec.com.co";
  // contrasena = "admin";

  correo = "admin@admin.admin";
  contrasena = "!2e4S";

  intervalSubscriptionSesion: Subscription;

  minLength: number = this.getConfigValue(
    "forms.validation.password.minLength"
  );
  maxLength: number = this.getConfigValue(
    "forms.validation.password.maxLength"
  );
  redirectDelay: number = this.getConfigValue("forms.login.redirectDelay");
  showMessages: any = this.getConfigValue("forms.login.showMessages");
  strategy: string = this.getConfigValue("forms.login.strategy");
  socialLinks: NbAuthSocialLink[] = this.getConfigValue(
    "forms.login.socialLinks"
  );
  rememberMe = this.getConfigValue("forms.login.rememberMe");
  isEmailRequired: boolean = this.getConfigValue(
    "forms.validation.email.required"
  );
  isPasswordRequired: boolean = this.getConfigValue(
    "forms.validation.password.required"
  );

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  loginForm: FormGroup;
  alive: boolean = true;
  currentUserId: number;

  public validData: dataLicens[] = [];
  public timer: number;

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected themeService: NbThemeService,
    private fb: FormBuilder,
    protected router: Router,
    protected initUserService: InitUserService,
    private userStore: UserStore,
    private api: HttpService,
    private apiGetComp: ApiGetService,
    private toasterService: NbToastrService
  ) {}

  ngOnInit(): void {
    const emailValidators = [Validators.pattern(EMAIL_PATTERN)];
    this.isEmailRequired && emailValidators.push(Validators.required);

    const passwordValidators = [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ];
    this.isPasswordRequired && passwordValidators.push(Validators.required);

    this.loginForm = this.fb.group({
      email: this.fb.control("", [...emailValidators]),
      password: this.fb.control("", [...passwordValidators]),
      rememberMe: this.fb.control(false),
    });
  }

  login(): void {
    // debugger
    this.user = this.loginForm.value;
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    let currentUserId = this.userStore.getUser()?.id;

    if (currentUserId === undefined) {
      currentUserId = 1;
    } else {
      currentUserId;
    }
    // console.log("este es el usuario: ",this.userStore.getUser().firstName);
    var respons = {
      user: this.user.email,
      message: "Inicio sesión",
      users: currentUserId,
    };
    this.apiGetComp
      .PostJson(this.api.apiUrlNode1 + "/postSaveAlarmUser", respons)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        //  console.log("Envió: ", res);
      });
    // debugger

    this.apiGetComp
      .GetJson(
        this.api.apiUrlNode1 + "/api/getlEmailuser?Email=" + this.user.email
      )
      .subscribe((res: any) => {
        this.validData = res;
        // debugger
        // console.log('Email ValidData: ', this.validData[0].Id)
        // console.log('Email ValidData: ', this.validData[0].States)
        // debugger
        if (
          (this.validData[0].Lat === 0 &&
            this.validData[0].Licens_id === "1" &&
            this.validData[0].States === 1) ||
          this.validData[0].Lat === null
        ) {
          // debugger;
          var respon = {
            user: this.validData[0].Id,
            sesion: 1,
          };
          this.apiGetComp
            .PostJson(this.api.apiUrlNode1 + "/updateSesion", respon)
            .pipe(takeWhile(() => this.alive))
            .subscribe((res: any) => {
              //  console.log("Envió: ", res);
            });
          this.service
            .authenticate(this.strategy, this.user)
            .subscribe((result: NbAuthResult) => {
              this.submitted = false;

              if (result.isSuccess()) {
                this.messages = result.getMessages();
                this.initUserService.initCurrentUser().subscribe();
              } else {
                this.errors = result.getErrors();
              }

              const redirect = result.getRedirect();
              if (redirect) {
                setTimeout(() => {
                  return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
              }
              this.cd.detectChanges();
            });
        } else if (this.validData[0].Licens_id === "2") {
          // debugger
          console.log("licencia de usuario inactiva");
          this.toasterService.danger(
            "",
            `¡Licencia Inactiva, por favor comuniquese con el administrador!`
          );
        } else if (this.validData[0].Licens_id === null) {
          console.log("No tiene tiene licencia ");
          this.toasterService.danger("", `¡No tiene tiene licencia!`);
        } else if (
          this.validData[0].States === 2 ||
          this.validData[0].States === null
        ) {
          console.log("Usuario Inactivo");
          this.toasterService.danger("", `¡Usuario Inactivo!`);
        } else {
          
          Swal.fire({
            title: "Sesión encontrada",
            text: `Actualmente tienes una sesión iniciada en nuestra plataforma, debes finalizar para continuar.  
            ¿Desea cerrar la sesión activa?`,
            // timer: 10000,
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "SI",
            cancelButtonText: "No",
          }).then((result) => {
            if (result.value) {
              let timers = 4500;

              var respon = {
                user: this.validData[0].Id,
                sesion: 0,
              };

              this.apiGetComp
                .PostJson(this.api.apiUrlNode1 + "/updateSesion", respon)
                .pipe(takeWhile(() => this.alive))
                .subscribe((res: any) => {
                  console.log("Se actualizó: ", res);
                });
              // Swal.fire(
              //   '¡Sesión cerrada',
              //   'La sesión que tenías abierta se he cerrado exitosamente, ahora puedes ingresar nuevamente.',
              //   'warning',

              Swal.fire({
                title: "¡Cargando!",
                text: "Esperando que se cierre la sesión",
                allowEscapeKey: false,
                allowOutsideClick: false,
                timer: timers,
                onOpen: () => {
                  Swal.showLoading();
                },
              }).then((result) => {
                if (result.value === this.timer) {
                  // debugger;

                  console.log("closed by timer!!!!");
                  this.apiGetComp
                    .GetJson(
                      this.api.apiUrlNode1 +
                        "/api/getlEmailuser?Email=" +
                        this.user.email
                    )
                    .pipe(takeWhile(() => this.alive))
                    .subscribe((res: any) => {
                      this.validData = res;

                      if (this.validData[0].Lat == 1) {
                        Swal.fire({
                          title: "El usuario continua con la sesión, Vuelva ha intentar!",
                          icon: "warning",
                          timer: 2000,
                          showConfirmButton: false,
                        });
                      } else {
                        Swal.fire({
                          title: "Se finalizó la seseón, Ya puede iniciar sesión!",
                          icon: "success",
                          timer: 2000,
                          showConfirmButton: false,
                        });
                      }
                    });
                }
              });
            }
          });
        }
      });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
