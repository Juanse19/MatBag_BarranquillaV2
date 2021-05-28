import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Banda7 } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ngx-bhs7',
  templateUrl: './bhs7.component.html',
  styleUrls: ['./bhs7.component.scss']
})
export class Bhs7Component implements OnInit {

  private alive=true;

  public dataBanda7: Banda7 = {
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
    }

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.banda7NameCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  public banda7NameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/ssosr')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.dataBanda7=res[0];
      console.log('data-banda7:', res);
      
    });

  }

}
