import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Banda6, zons } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-bhs6',
  templateUrl: './bhs6.component.html',
  styleUrls: ['./bhs6.component.scss']
})
export class Bhs6Component implements OnInit {

  public zone: zons[] = [];

  private alive=true;

  public dataBanda6: Banda6 = {
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
    b17: "",
    b18: "",
    b19: "",
    b20: "",
    b21: "",
    b22: "",
    b23: "",
    b24: "",
    b25: "",
    b26: "",
    b27: "",
    b28: "",
    b29: "",
    b30: "",
    b31: "",
    b32: "",
    b33: "",
    b34: "",
    b35: "",
    b36: "",
    }

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.banda6NameCharge();
    this.bandaNameCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  public banda6NameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/cl')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.dataBanda6=res[0];
      console.log('data-banda6:', res);
      
    });

  }

  public bandaNameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona4')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      console.log('Zons3:', res , 'band with zones', this.zone[1].Name);
      
    });

  }

}
