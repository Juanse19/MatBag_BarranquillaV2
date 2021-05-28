import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Banda3 } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-bhs3',
  templateUrl: './bhs3.component.html',
  styleUrls: ['./bhs3.component.scss']
})
export class Bhs3Component implements OnInit {

  private alive=true;
 
  public dataBanda3: Banda3 = {
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
    }

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.banda3NameCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  public banda3NameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/mu')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.dataBanda3=res[0];
      console.log('data-banda4:', res);
      
    });

  }

}
