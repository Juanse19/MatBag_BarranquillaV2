import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Banda5, zons, states } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-bhs5',
  templateUrl: './bhs5.component.html',
  styleUrls: ['./bhs5.component.scss']
})
export class Bhs5Component implements OnInit {

  public zone: zons[] = [];

  public states: states [] = [];

  private alive=true;
 
  public dataBanda5: Banda5 = {
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
    this.banda5NameCharge();
    this.bandaNameCharge();
    this.bandaStateCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  public banda5NameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/sfi')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.dataBanda5=res[0];
      // console.log('data-banda5:', res);
      console.log("FCS", this.dataBanda5.b1);
      
    });

  }

  public bandaNameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona12')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      // console.log('Zons3:', res , 'band with zones', this.zone[1].Name);
      
    });

  }

  public bandaStateCharge(){

    this.http.get(this.api.apiUrlNode1 + '/apizonestate?zone=zona5')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: states[]=[])=>{
      this.states=res;
      console.log('Zons:', res , 'states', this.states[0]?.Estado);
      
    });
  }

}
