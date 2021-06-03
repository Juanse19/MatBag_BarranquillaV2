import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, takeWhile } from 'rxjs/operators';
import { Banda1, zons, teams } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-bhs1',
  templateUrl: './bhs1.component.html',
  styleUrls: ['./bhs1.component.scss']
})
export class Bhs1Component implements OnInit {

  private alive=true;

  public divice: teams[] = [];

  public zone: zons[] = [];

  team: teams[] = [];

  intervalSubscriptionStatusAlarm:Subscription;
 
  public dataBanda1: Banda1 = {
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",
    b9: "",
    b10: "",
    b11: "",
    b12: "",
    b13: "",
    b14: "",
    }

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    // this.banda1NameCharge();
    this.bandaNameCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }


  public bandaNameCharge(){
    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona13')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      console.log('banda1:', res , 'band with zones', this.zone[1].Name);
    });
  }

   public changeId(tea: any){

    if (this.intervalSubscriptionStatusAlarm) {
      this.intervalSubscriptionStatusAlarm.unsubscribe();
    }
    
    this.intervalSubscriptionStatusAlarm = interval(1000)
    .pipe(
      takeWhile(() => this.alive),
      switchMap(() => this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ tea)),
    )
    .subscribe((res: any) => {
        this.divice  = res;
        console.log('capture Id:', res);
    });
 
  }

  // public changeId(tea: any): void{
  //   console.log("Prueba de captura de id", tea);
  //   this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ tea)
  //   .pipe(takeWhile(() => this.alive))
  //   .subscribe((res: any)=>{
  //     // this.popover.show(); 
  //     this.team=res;
  //     console.log('captura Id:', res);
  //   });
  // }

  ngOnDestroy() {
    this.changeId(this.alive = false);
    this.alive = false;
  }

}
