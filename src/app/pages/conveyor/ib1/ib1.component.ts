import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-ib1',
  templateUrl: './ib1.component.html',
  styleUrls: ['./ib1.component.scss']
})
export class Ib1Component implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/pages/conveyor/info']);
    return false;
  }

}
