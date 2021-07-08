import { Component, TemplateRef, ViewChild, Injectable, ElementRef } from '@angular/core';
import { NbWindowConfig, NbWindowService, NbWindowRef,NbToastrService } from '@nebular/theme';
import {ApiGetService} from './apiGet.services';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { NbAccessChecker } from '@nebular/security'
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { BehaviorSubject, Observable, of, Subject,Subscription } from 'rxjs';
import { debounceTime, delay, reduce, switchMap, takeWhile, tap } from 'rxjs/operators';
import { Consumezone } from '../../conveyor/_interfaces/MatBag.model';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

let win:NbWindowRef;

let IDDEVICE: number;

@Component({
  providers: [
    ApiGetService,
    DecimalPipe,
  ],
  selector: 'ngx-window-pop-component',
  templateUrl: './window-pop-component.component.html',
  styleUrls: ['./window-pop-component.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class WindowPopComponentComponent {

  
  windowRef:NbWindowRef;

  // @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  // @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;
  

  private alive = true;
  
   mySubscription: any;

   idDevice = IDDEVICE;

  public consumezoneData: Consumezone[] = [];



  constructor(
    public windowService: NbWindowService,
    public accessChecker: NbAccessChecker,
    private apiGetComp: ApiGetService,
    public pipe: DecimalPipe,
    private router: Router,
    private api: HttpService,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
  }

  // infoData(idDevice?: number){
  //   this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/apiZoneFrontConsume?zone='+ idDevice)
  //     .pipe()
  //     .subscribe((res: any)=>{
  //       this.consumezoneData = res;
  //       console.log('Info:', res , 'Zons: ', this.consumezoneData[0].ZoneName);
  //     });
  // }

  DataLoad(idDevice?: number){
    debugger
    // this.idDevice = idDevice;
    // IDDEVICE=idDevice
    this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/apiZoneFrontConsume?zone='+ idDevice)
    .pipe()
    .subscribe((res: any)=>{
      this.consumezoneData = res;
      console.log('Info:', res , 'Zons: ', this.consumezoneData);
      win=this.windowRef=this.windowService.open(
        WindowPopComponentComponent, 
        { title: 'Zona',
        hasBackdrop: true,
        closeOnEsc: true,
        }
        );
    });
    
  }



  openWindowForms(idDevice?: number) {
    // this.accessChecker.isGranted('edit', 'machine')
    // .pipe(takeWhile(() => this.alive))
    // .subscribe((res: any) => {
    //   if(res){ 
    //     this.DataLoad(idDevice);
    //   }
    // });
    // debugger
    this.DataLoad(idDevice);
  }

  close() {
    this.windowRef.close();
  }

}
