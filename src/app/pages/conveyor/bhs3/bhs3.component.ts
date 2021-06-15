import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, takeWhile } from 'rxjs/operators';
import { Banda3, states, teams, zons } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-bhs3',
  templateUrl: './bhs3.component.html',
  styleUrls: ['./bhs3.component.scss']
})
export class Bhs3Component implements OnInit {

  public zone: zons[] = [];

  public divice: teams[] = [];

  public states: states [] = [];

  private alive = true;

  intervalSubscriptionStatusAlarm: Subscription;
 
  // public dataBanda3: Banda3 = {
  //   b1: "",
  //   b2: "",
  //   b3: "",
  //   b4: "",
  //   b5: "",
  //   b6: "",
  //   b7: "",
  //   b8: "",
  //   b9: "",
  //   b10: "",
  //   }

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    // this.banda3NameCharge();
    this.bandaNameCharge();
    this.bandaStateCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  // public banda3NameCharge(){

  //   this.http.get(this.api.apiUrlNode1 + '/mu')
  //   .pipe(takeWhile(() => this.alive))
  //   .subscribe((res: any)=>{
  //     this.dataBanda3=res[0];
  //     console.log('data-banda4:', res);
      
  //   });
  // }

  public bandaNameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona6')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      console.log('Zons3:', res , 'band with zones', this.zone[1].Name);
      
    });
  }

  public changeId(tea: any){
 
    this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ tea)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.divice=res;
      console.log('Zons:', res , 'states');
      
    });
  }

  public bandaStateCharge(){

    if (this.intervalSubscriptionStatusAlarm) {
      this.intervalSubscriptionStatusAlarm.unsubscribe();
    }
    
    this.intervalSubscriptionStatusAlarm = interval(1000)
    .pipe(
      takeWhile(() => this.alive),
      switchMap(() => this.http.get(this.api.apiUrlNode1 + '/apizonestate?zone=zona6')),
    )
    .subscribe((res: any) => {
        this.states  = res;
        console.log('status:', res);
    });
  }

  ngOnDestroy() {
    this.changeId(this.alive = false);
    this.alive = false;
  }

}
