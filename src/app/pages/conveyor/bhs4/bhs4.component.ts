import { Component, OnInit, ViewChild } from '@angular/core'; 
import { NbPopoverDirective } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { delay, map, takeUntil, takeWhile, timeout,switchMap } from 'rxjs/operators';
import { Banda4, teams, zons } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

let te: teams;
{

}
@Component({
  selector: 'ngx-bhs4',
  templateUrl: './bhs4.component.html',
  styleUrls: ['./bhs4.component.scss']
})
export class Bhs4Component implements OnInit {

  public zone: zons[] = [];

  private alive=true;
  
  team: teams[] = [];
  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;
  tea = te;

  intervalSubscriptionStatusAlarm:Subscription;

  public dataBanda4: Banda4 = {
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
    b15: "",
    b16: "",
    }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.banda4NameCharge();
    this.bandaNameCharge();
    // this.ChangeTeam();
    // this.teamsCharge();
    // this.bandaCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }


  public banda4NameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/al')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.dataBanda4=res[0];
      console.log('data-banda4:', res);
      
    });

  }

  public bandaNameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona5')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      console.log('Zons3:', res , 'band with zones', this.zone[1].Name);
      
    });

  }

  // public changeId(tea: any){

  //   if (this.intervalSubscriptionStatusAlarm) {
  //     this.intervalSubscriptionStatusAlarm.unsubscribe();
  //   }
    
  //   // this.popover.show();   

  //   this.intervalSubscriptionStatusAlarm = interval(100)
  //   .pipe(
  //     takeWhile(() => this.alive),
  //     switchMap(() => this.http.get(this.api.apiTeam + '/teams?idEquipo='+ tea)),
  //   )
  //   .subscribe((res: any) => {
  //       this.team  = res;
  //       console.log('captura Id:', res);
  //   });

    
  //   // this.apiGetComp.GetJson(this.api.apiUrlNode + '/es')
  //   //   .pipe(takeWhile(() =>this.flagMoverCarro))
  //   // .subscribe((res: any) => {
  //   //   this.showdataAlarms  = res[0];
  //   //   });

  // }
  
  // public changeId(tea: any): void{
  //   console.log("Prueba de captura de id", tea);
  //   this.http.get(this.api.apiTeam + '/teams?idEquipo='+ tea)
  //   .pipe(takeWhile(() => this.alive))
  //   .subscribe((res: any)=>{
  //     // this.popover.show(); 
  //     this.team=res;
  //     console.log('captura Id:', res);
  //     return this.popover.show;
  //   });
  // }

}
