import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consumezone, Zones } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { switchMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public zone: Zones[] = [];

  public consumezoneData: Consumezone[] = [];

  private alive=true;

  constructor(private router: Router,
    private http: HttpClient,
    private api: HttpService) {
    
  }


  ngOnInit(): void {
    this.GetSystem();
  }

  private GetSystem(){    
    this.http.get(this.api.apiUrlNode1 + '/apifront')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:Zones[])=>{
      this.zone=res;
      // console.log("zon", this.zone);
      console.log("Res ", res);
      
    });
  }

  public changeId(tea: any){
 
    this.http.get(this.api.apiUrlNode1 + '/apiZoneFrontConsume?zone='+ tea)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.consumezoneData=res;
      console.log('Zons:', res , 'states');
      
    });
  }


  ib1() {
    this.router.navigate(['/pages/conveyor/ib1']);
   }

   ib2() {
    this.router.navigate(['/pages/conveyor/ib2']);
   }

   ib3() {
    this.router.navigate(['/pages/conveyor/ib3']);
   }
  
   ngOnDestroy() {
    this.alive = false;
  }

}
