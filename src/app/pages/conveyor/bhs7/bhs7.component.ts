import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-bhs7',
  templateUrl: './bhs7.component.html',
  styleUrls: ['./bhs7.component.scss']
})
export class Bhs7Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

}
