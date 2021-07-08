import { Component, OnInit, ViewChild, TemplateRef,  } from '@angular/core';
import { Router } from '@angular/router';
import { NbPopoverDirective, NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { delay, map, takeUntil, takeWhile, timeout,switchMap } from 'rxjs/operators';
import { Observable, Subject, of, BehaviorSubject, interval,Subscription } from 'rxjs';
import { Zones, syste, teams, Consumezone, departures, Zonass } from '../../../conveyor/_interfaces/MatBag.model';
import { HttpService } from '../../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { GridComponent, PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { WindowPopComponentComponent } from '../../window-pop-component/window-pop-component.component'

@Component({
  providers: [
    WindowPopComponentComponent
   ],
  selector: 'ngx-system-operation',
  templateUrl: './system-operation.component.html',
  styleUrls: ['./system-operation.component.scss']
})
export class SystemOperationComponent implements OnInit {

  public zone: Zones[] = [];

  public deparData: departures[];

  private alive=true;

  public consumezoneData: Consumezone[] = [];

  team: teams[] = [];

  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  intervalSubscriptionStatusAlarm:Subscription;

  // @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService,
    private windowService: NbWindowService,
    private comp3: WindowPopComponentComponent
    ) { }

  ngOnInit(): void {
    this.GetSystem();
    this.pageSettings = { pageSize: 5 };
    this.filterOptions = {
      type: 'Menu',
   };
  }

  

  private GetSystem(){    
    this.http.get(this.api.apiUrlNode1 + '/apifront')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:Zones[])=>{
      this.zone=res;
    });
  }

  public changeId(tea: any){

    this.http.get(this.api.apiUrlNode1 + '/apiZoneFrontConsume?zone='+ tea)
    .pipe()
    .subscribe((res: any)=>{
      this.consumezoneData=res;
      // console.log('Zons:', res , 'states');
    });
  }

  public changeIdMakeUp(mak: any){
 
    this.http.get(this.api.apiUrlNode1 + '/api/departuresInfo?Id='+ mak)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.deparData=res;
    });
  }


  openWindowWithoutBackdrop(idDevice?: number) {
    this.http.get(this.api.apiUrlNode1 + '/apiZoneFrontConsume?zone='+ idDevice)
    .pipe()
    .subscribe((res: any)=>{
      this.consumezoneData=res;
      console.log('Zons:', res );
    });
   this.windowService.open(
    this.disabledEscTemplate,
    {
      title: 'zonas',
      hasBackdrop: false,
      closeOnEsc: false,
    },
  );
  }

  //Abrir ventana de cada zona

  ClicTX() {
    // this.comp3.openWindowForms(Zonass.TX);
    this.openWindowWithoutBackdrop(Zonass.TX);
  }

  ClicSF() {
  // this.comp3.openWindowForms(1);
  this.openWindowWithoutBackdrop(1);
  }

  ClicSS() {
  // this.comp3.openWindowForms(2);
  this.openWindowWithoutBackdrop(2);
  }

  ClicMU() {
  this.comp3.openWindowForms(6);
  }

  ClicAL() {
  this.comp3.openWindowForms(5);
  }

  ClicSFC() {
  this.comp3.openWindowForms(12);
  }

  ClicOSR() {
  this.comp3.openWindowForms(3);
  }

  ClicCL() {
  this.comp3.openWindowForms(4);
  }

  ClicME(): void {
  this.comp3.openWindowForms(11);
  }

// Navegacion a zonas

  bhs1() {
    this.router.navigate(['/pages/conveyor/bhs1']);
   }

   bhs2() {
    this.router.navigate(['/pages/conveyor/bhs2']);
   }

   bhs3() {
    this.router.navigate(['/pages/conveyor/bhs3']);
   }

   bhs4() {
    this.router.navigate(['/pages/conveyor/bhs4']);
   }

   bhs5() {
    this.router.navigate(['/pages/conveyor/bhs5']);
   }

   bhs6() {
    this.router.navigate(['/pages/conveyor/bhs6']);
   }

   bhs7() {
    this.router.navigate(['/pages/conveyor/bhs7']);
   } 

   bhs8() {
    this.router.navigate(['/pages/conveyor/bhs8']);
   }

   bhs9() {
    this.router.navigate(['/pages/conveyor/bhs9']);
   }

   bhs10() {
    this.router.navigate(['/pages/conveyor/bhs10']);
   }

   ngOnDestroy() {
    this.alive = false;
  }

}
