import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  

  constructor(private router: Router,) {
    
  }


  ngOnInit(): void {
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
  

}
