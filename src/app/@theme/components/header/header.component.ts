/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnDestroy, OnInit, Injectable } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { LayoutService } from '../../../@core/utils';
import { map, switchMap, takeUntil, takeWhile } from 'rxjs/operators';
import { interval, Subject, Subscription } from 'rxjs';
import { UserStore } from '../../../@core/stores/user.store';
import { SettingsData } from '../../../@core/interfaces/common/settings';
import { User } from '../../../@core/interfaces/common/users';
import {WindowComponentAlarm} from '../../../pages/dashboard/alarmPopup/alarmPopup.component';
import { SignalRService } from '../../../pages/dashboard/services/signal-r.service';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiGetService } from '../../../pages/dashboard/OrderPopup/apiGet.services';
import { NbAccessChecker } from '@nebular/security';

interface dataLicens {
  Id: number
  Lat: number
  States: number
  Licens_id: string
}

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit, OnDestroy {

  public validData: dataLicens[] = []

  public numeroAlarmas = "0";
  private alive = true;
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: User;
  sicProcess: boolean = true;
    public select = false;
    mostrar: Boolean;
    intervalSubscriptionStatusSesion: Subscription;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = this.getMenuItems();

  constructor(
              public accessChecker: NbAccessChecker,
              private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userStore: UserStore,
              private settingsService: SettingsData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private comp3: WindowComponentAlarm,
              private router: Router,
              private http: HttpClient,
              private apiGetComp: ApiGetService,
              private api: HttpService,
              public sigalRService: SignalRService) {

                this.accessChecker.isGranted('edit', 'ordertable').subscribe((res: any) => {
                  if(res){ 
                    this.select = false;
                    this.mostrar = false;
                  }else {
                    this.select=true;
                    this.mostrar=true;
                  }
                });

  }

  getMenuItems() {
    const userLink = this.user ?  '/pages/users/current/' : '';
    return [
      { title: 'Perfil', link: userLink, queryParams: { profile: true } },
      { title: 'Cerrar Sesión', link: '/auth/logout' },
    ];
  }

  // public AutoLogoutCharge(){

  //   if (this.intervalSubscriptionStatusSesion) {
  //     this.intervalSubscriptionStatusSesion.unsubscribe();
  //   }
  //   // debugger
  //   this.intervalSubscriptionStatusSesion = interval(1000)
  //   .pipe(
  //     takeWhile(() => this.alive),
  //     switchMap(() => this.http.get(this.api.apiUrlNode1 + '/api/getlEmailuser?Email=' + this.userStore.getUser().email)),
  //   )
  //   .subscribe((res: any) => {
  //       // this.states  = res;
  //       // console.log('status:', res);
  //       this.validData = res
  //       // debugger
  //       // console.log('Email ValidData: ', this.validData[0].Id)
  //       if ( this.validData[0].Lat === 0 && this.validData[0].Licens_id === '1') 
  //       {
  //         // debugger
  //         this.intervalSubscriptionStatusSesion.unsubscribe();
  //         Swal.fire({
  //           title: 'Se cerrará la sesion?',
  //           text: `¡Desea continuar con la sesion activa!`,
  //           icon: 'warning',
  //           timer: 5500,
  //           showCancelButton: true,
  //           confirmButtonColor: '#3085d6',
  //           // cancelButtonColor: '#d33',
  //           cancelButtonText: 'No, Cerrar!',
  //           confirmButtonText: '¡Desea continuar!'
  //         }).then(result => {
  //           if (result.value) {
             
  //             var respon = {
  //               user: this.validData[0].Id,
  //               sesion: 1,
  //             }
  //             this.apiGetComp
  //               .PostJson(this.api.apiUrlNode1 + '/updateSesion', respon)
  //               .pipe(takeWhile(() => this.alive))
  //               .subscribe((res: any) => {
  //                  console.log("Envió: ", res);
  //               })
  //             // this.intervalSubscriptionStatusSesion.unsubscribe();
              
  //             console.log("Continua navegando: ", res);
  //             this.AutoLogoutCharge();
  //       // Swal.fire('¡Se sincronizo Exitosamente', 'success');
  //           } else {
  //             console.log('Se cierra por tiempo');
              
  //             this.router.navigate(['/auth/logout']);
  //           }
  //         });

  //         // this.router.navigate(['/auth/logout']);
  //         // console.log('Se cerro la sesion');

  //       } else {
         
  //          console.log('Continue con la sesion');

  //       }
  //   });
  // }

  ngOnInit() {
    // this.AutoLogoutCharge();
    // this.sigalRService.startConnectionAlarmas();
      // this.startHttpRequestAlarmas();  
      this.sigalRService.GetDataAlarmManual();
    
      // console.log("test", this.sigalRService);
      

    this.currentTheme = this.themeService.currentTheme;

    this.userStore.onUserStateChange()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((user: User) => {
        this.user = user;
        this.userMenu = this.getMenuItems();
      });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.sigalRService.aliveAlarm=false;
    this.alive
  }

  changeTheme(themeName: string) {
    this.userStore.setSetting(themeName);
    this.settingsService.updateCurrent(this.userStore.getUser().settings)
      .pipe(takeUntil(this.destroy$))
      .subscribe();

    this.themeService.changeTheme(themeName);
  }

  private startHttpRequestAlarmas(){    
    this.http.get(this.api.apiUrlMatbox + "/sralarms")
    .subscribe(res=>{
      // console.log(res);
    });
      }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
  // AbrirAlarmas(){
  //  this.comp3.openWindowForm("Alarmas","");
  // }

  AbrirAlarms() {
    this.router.navigate(['/pages/tables/alarms/']);
  }
 
  Actualizar(){
    Swal.fire({
      title: 'Desea sincronizar?',
      text: `¡Sincronizara Syncro y Sic!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Sincronizar!'
    }).then(result => {
      if (result.value) {
        // this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Orders/SyncOrder')
        // .subscribe((res: any) => {
        //   console.log('Sic: ',res);
        //   this.sicProcess = res;
        //   Swal.fire('¡Se sincronizo Exitosamente', 'success');
        // });
    //   this.http.get(this.api.apiUrlMatbox + "/Orders/SyncOrder")
    //   .subscribe((res:any)=>{
    //   Swal.fire('¡Se sincronizo Exitosamente', 'success');
    // });
    // Swal.fire('¡Se sincronizo Exitosamente', 'success');

    this.http.get(this.api.apiUrlMatbox + "/Orders/SyncOrder", { observe: 'response' })
  .pipe()
  .subscribe(resp => {
    if (resp.status === 200 ) {
      console.log(true)
    } else {
      console.log(false)
    }
  } , err => console.log(err));
  Swal.fire('¡Se sincronizo Exitosamente', 'success');
      }
    });
    
  }

}
