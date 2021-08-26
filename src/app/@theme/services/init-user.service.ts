/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Observable } from 'rxjs';
import { User, UserData } from '../../@core/interfaces/common/users';
import { tap } from 'rxjs/operators';
import { UserStore } from '../../@core/stores/user.store';
import { Inject, Injectable } from '@angular/core';
import { NB_AUTH_OPTIONS, NbAuthService, NbAuthResult } from '@nebular/auth';
import { NbJSThemesRegistry, NbThemeService } from '@nebular/theme';
import { Router } from '@angular/router';
import { getDeepFromObject } from '../../@auth/helpers';

@Injectable()
export class InitUserService {

  redirectDelay: number = this.getConfigValue('forms.logout.redirectDelay');
  strategy: string = this.getConfigValue('forms.logout.strategy');

    
    constructor(protected userStore: UserStore,
      protected service: NbAuthService,
    protected router: Router,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
        protected usersService: UserData,
        protected jsThemes: NbJSThemesRegistry,
        protected themeService: NbThemeService) { }

        ngOnInit(): void {

          // this.autoLogout;
        }

    initCurrentUser(): Observable<User> {
      return this.usersService.getCurrentUser()
            .pipe(tap((user: User) => {
                if (user) {
                  this.userStore.setUser(user);

                  if (user.settings && user.settings.themeName) {
                    if (this.jsThemes.has(user.settings.themeName)) {
                      this.themeService.changeTheme(user.settings.themeName);
                    }
                  }
                }
            }));
    }

    // autoLogout(expirationData: number, strategy: string){
    //   console.log(expirationData);
    //   setTimeout(() => {
    //     this.service.logout(strategy).subscribe((result: NbAuthResult) => {
    //       const redirect = result.getRedirect();
    //       if (redirect) {
    //         setTimeout(() => {
    //           return this.router.navigateByUrl(redirect);
    //         }, this.redirectDelay);
    //       }
    //     });
    //   }, expirationData, 300000);
    // }

    getConfigValue(key: string): any {
      return getDeepFromObject(this.options, key, null);
    }

}
