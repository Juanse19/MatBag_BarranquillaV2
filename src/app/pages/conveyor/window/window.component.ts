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

  public divice: teams[] = [];

  public divices: teams[] = [];

  public showCloseIcon: Boolean = true;

  constructor( 
    public accessChecker: NbAccessChecker,
    private http: HttpClient,
    private api: HttpService,
    ) { }

    @ViewChild('ejDialogTX1') ejDialogTX1: DialogComponent;
    @ViewChild('ejDialogTX2') ejDialogTX2: DialogComponent;
    @ViewChild('ejDialog') ejDialog: DialogComponent;
    @ViewChild('ejDialog1') ejDialog1: DialogComponent;
    @ViewChild('ejDialog2') ejDialog2: DialogComponent;
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


    DataLoad(idDevice?: number){
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divice=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.ejDialogTX1.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }

    DataLoads(idDevice?: number){
      debugger
      this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ idDevice)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any)=>{
        this.divices=res;
        // console.log('Zons:', res , 'states', this.states[0]?.Color);
        this.ejDialogTX2.show();
        // this.ejDialogTX.position = { X: 171.33, Y: 100.14 };
      });
    }
 
    openDialogForm(idDevice?: number) {
      this.accessChecker.isGranted('edit', 'machine')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        if(res){ 
          this.DataLoad(idDevice);
          debugger
        }
      });
      // debugger
    }

    opens(idDevice?: number){
      console.log('test...!');
      this.DataLoad(idDevice)
    }

    opens2(idDevice?: number){
      console.log('test...!');
      this.DataLoads(idDevice)
    }

    ngOnDestroy() {
      this.alive = false;
    }

}
