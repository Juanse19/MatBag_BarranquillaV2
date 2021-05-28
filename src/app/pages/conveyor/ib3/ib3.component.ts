import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-ib3',
  templateUrl: './ib3.component.html',
  styleUrls: ['./ib3.component.scss']
})
export class Ib3Component implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/pages/conveyor/info']);
    return false;
  }

}
