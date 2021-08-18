import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Injectable, TemplateRef } from '@angular/core';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { NbAccessChecker } from '@nebular/security'
import { takeWhile } from 'rxjs/operators';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { Banda1, zons, teams, states } from '../_interfaces/MatBag.model';

@Component({
  selector: 'ngx-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable({
  providedIn: 'root'
})
export class WindowComponent implements OnInit {
 
  private alive = true;

  // --------- DEVICES --------
  public divices1: teams[] = [];
  public divices2: teams[] = [];
  public divices3: teams[] = [];
  public divices4: teams[] = [];
  public divices5: teams[] = [];
  public divices6: teams[] = [];
  public divices7: teams[] = [];
  public divices8: teams[] = [];
  public divices9: teams[] = [];
  public divices10: teams[] = [];
  public divices11: teams[] = [];
  public divices12: teams[] = [];
  public divices13: teams[] = [];
  public divices14: teams[] = [];
  public divices15: teams[] = [];
  public divices16: teams[] = [];
  public divices17: teams[] = [];
  public divices18: teams[] = [];
  public divices19: teams[] = [];
  public divices20: teams[] = [];
  public divices21: teams[] = [];
  public divices22: teams[] = [];
  public divices23: teams[] = [];
  public divices24: teams[] = [];
  public divices25: teams[] = [];
  public divices26: teams[] = [];
  public divices27: teams[] = [];
  public divices28: teams[] = [];
  public divices29: teams[] = [];
  public divices30: teams[] = [];
  public divices31: teams[] = [];
  public divices32: teams[] = [];
  public divices33: teams[] = [];
  public divices34: teams[] = [];
  public divices35: teams[] = [];
  public divices36: teams[] = [];

  public showCloseIcon: Boolean = true;

  constructor( 
    public accessChecker: NbAccessChecker,
    private http: HttpClient,
    private api: HttpService,
    ) { }

    @ViewChild('device1') device1: DialogComponent;
    @ViewChild('device2') device2: DialogComponent;
    @ViewChild('device3') device3: DialogComponent;
    @ViewChild('device4') device4: DialogComponent;
    @ViewChild('device5') device5: DialogComponent;
    @ViewChild('device6') device6: DialogComponent;
    @ViewChild('device7') device7: DialogComponent;
    @ViewChild('device8') device8: DialogComponent;
    @ViewChild('device9') device9: DialogComponent;
    @ViewChild('device10') device10: DialogComponent;
    @ViewChild('device11') device11: DialogComponent;
    @ViewChild('device12') device12: DialogComponent;
    @ViewChild('device13') device13: DialogComponent;
    @ViewChild('device14') device14: DialogComponent;
    @ViewChild('device15') device15: DialogComponent;
    @ViewChild('device16') device16: DialogComponent;
    @ViewChild('device17') device17: DialogComponent;
    @ViewChild('device18') device18: DialogComponent;
    @ViewChild('device19') device19: DialogComponent;
    @ViewChild('device20') device20: DialogComponent;
    @ViewChild('device21') device21: DialogComponent;
    @ViewChild('device22') device22: DialogComponent;
    @ViewChild('device23') device23: DialogComponent;
    @ViewChild('device24') device24: DialogComponent;
    @ViewChild('device25') device25: DialogComponent;
    @ViewChild('device26') device26: DialogComponent;
    @ViewChild('device27') device27: DialogComponent;
    @ViewChild('device28') device28: DialogComponent;
    @ViewChild('device29') device29: DialogComponent;
    @ViewChild('device30') device30: DialogComponent;
    @ViewChild('device31') device31: DialogComponent;
    @ViewChild('device32') device32: DialogComponent;
    @ViewChild('device33') device33: DialogComponent;
    @ViewChild('device34') device34: DialogComponent;
    @ViewChild('device35') device35: DialogComponent;
    @ViewChild('device36') device36: DialogComponent;

    // Create element reference for dialog target element.
    @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef;
    // The Dialog shows within the target element.
    public targetElement: HTMLElement;
  
    public visible: Boolean = true;
    public hidden: Boolean = false;
  
    ngOnInit(): void {
      // this.initilaizeTarget();
    }

      // Initialize the Dialog component's target element.
      public initilaizeTarget: EmitType<object> = () => {
        this.targetElement = this.container.nativeElement.parentElement;
          }
          // Hide the Dialog when click the footer button.
          public hideDialog: EmitType<object> = () => {
            // this.ejDialog.hide();
            // this.ejDialog1.hide();
            // this.ejDialog2.hide();
          }
          // Enables the footer buttons
          public buttons: Object = [
          // {
          //     'click': this.hideDialog.bind(this),
          //     // Accessing button component properties by buttonModel property
          //       buttonModel: {
          //       content: 'OK',
          //       isPrimary: true
          //     }
          // },
          // {
          //     'click': this.hideDialog.bind(this),
          //     buttonModel: {
          //       content: 'Cancel'
          //     }
          // }
          ];


    // DataLoad(idDevice?: number){
    //   debugger
    //   this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((res: any)=>{
    //     this.divices1=res;
    //     // console.log('Zons:', res , 'states', this.states[0]?.Color);
    //     this.ejDialogTX1.show();
    //     // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
    //   });
    // }

    // DataLoads(idDevice?: number){
    //   debugger
    //   this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((res: any)=>{
    //     this.divices2=res;
    //     // console.log('Zons:', res , 'states', this.states[0]?.Color);
    //     this.device1.show();
    //     // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
    //   });
    // }
 
    // openDialogForm(idDevice?: number) {
    //   this.accessChecker.isGranted('edit', 'machine')
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((res: any) => {
    //     if(res){ 
    //       this.DataLoad(idDevice);
    //       debugger
    //     }
    //   });
    //   // debugger
    // }

    public opendevice1(idDevice?: number){
      console.log('test...! 1');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        debugger
        if(res === null){
          this.device1.hide();
        }else{
          this.divices1=res;
          console.log('Test: ', this.divices1);
          this.device1.show();
          // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
        }
      },
      err=>console.log('Error', err));
    }

    public opendevice2(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        this.divices2=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device2.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      },
      err=>console.log('Error', err));
    }

    public opendevice3(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        this.divices3=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device3.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice4(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        this.divices4=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device4.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice5(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        this.divices5=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device5.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice6(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        this.divices6=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device6.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice7(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        this.divices7=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device7.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice8(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        this.divices8=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device8.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice9(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        this.divices9=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device9.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice10(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any [])=>{
        this.divices10=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device10.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice11(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices11=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device11.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice12(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices12=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device12.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice13(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices13=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device13.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice14(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices14=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device14.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice15(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices15=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device15.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice16(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices16=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device16.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice17(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices17=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device17.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice18(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices18=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device18.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice19(idDevice?: number){
      console.log('test...! 19');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices19=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device19.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice20(idDevice?: number){
      console.log('test...! 20');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices20=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device20.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice21(idDevice?: number){
      console.log('test...! 21');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices21=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device21.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice22(idDevice?: number){
      console.log('test...! 22');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices22=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device22.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice23(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices23=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device23.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice24(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices24=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device24.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice25(idDevice?: number){
      console.log('test...! 2');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices25=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device25.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice26(idDevice?: number){
      console.log('test...! 26');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices26=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device26.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice27(idDevice?: number){
      console.log('test...! 27');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices27=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device27.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice28(idDevice?: number){
      console.log('test...! 28');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices28=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device28.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice29(idDevice?: number){
      console.log('test...! 29');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices29=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device29.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice30(idDevice?: number){
      console.log('test...! 30');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices30=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device30.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice31(idDevice?: number){
      console.log('test...! 31');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices31=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device31.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice32(idDevice?: number){
      console.log('test...! 32');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices32=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device32.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice33(idDevice?: number){
      console.log('test...! 32');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices33=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device33.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice34(idDevice?: number){
      console.log('test...! 32');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices34=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device34.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice35(idDevice?: number){
      console.log('test...! 32');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices35=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device35.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opendevice36(idDevice?: number){
      console.log('test...! 32');
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices36=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.device36.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    opentest(){
      console.log('test de comunicación');
      
    }

    ngOnDestroy() {
      this.alive = false;
    }

}
