import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-ib2',
  templateUrl: './ib2.component.html',
  styleUrls: ['./ib2.component.scss']
})
export class Ib2Component implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/pages/conveyor/info']);
    return false;
  }

}
