import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-system-operation',
  templateUrl: './system-operation.component.html',
  styleUrls: ['./system-operation.component.scss']
})
export class SystemOperationComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    
  }

  bhs1() {
    this.router.navigate(['/pages/conveyor/bhs1']);
   }

   bhs2() {
    this.router.navigate(['/pages/conveyor/bhs2']);
   }

   bhs3() {
    this.router.navigate(['/pages/conveyor/bhs3']);
   }

   bhs4() {
    this.router.navigate(['/pages/conveyor/bhs4']);
   }

   bhs5() {
    this.router.navigate(['/pages/conveyor/bhs5']);
   }

   bhs6() {
    this.router.navigate(['/pages/conveyor/bhs6']);
   }

   bhs7() {
    this.router.navigate(['/pages/conveyor/bhs7']);
   }

   bhs8() {
    this.router.navigate(['/pages/conveyor/bhs8']);
   }

}
