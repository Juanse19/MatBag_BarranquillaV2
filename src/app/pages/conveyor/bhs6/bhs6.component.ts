import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-bhs6',
  templateUrl: './bhs6.component.html',
  styleUrls: ['./bhs6.component.scss']
})
export class Bhs6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

}
