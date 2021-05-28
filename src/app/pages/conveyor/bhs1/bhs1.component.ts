import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Banda1 } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-bhs1',
  templateUrl: './bhs1.component.html',
  styleUrls: ['./bhs1.component.scss']
})
export class Bhs1Component implements OnInit {

  private alive=true;
 
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
    this.banda1NameCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  public banda1NameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/tx')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.dataBanda1=res[0];
      console.log('data-banda1:', res);
      
    });

  }

}
