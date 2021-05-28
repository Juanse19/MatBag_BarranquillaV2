import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Banda8 } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-bhs8',
  templateUrl: './bhs8.component.html',
  styleUrls: ['./bhs8.component.scss']
})
export class Bhs8Component implements OnInit {

  private alive=true;

  public dataBanda8: Banda8 = {
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    }

  constructor(private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.banda8NameCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  } 

  public banda8NameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/me')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.dataBanda8=res[0];
      console.log('data-banda:', res);
      
    });

  }

}
