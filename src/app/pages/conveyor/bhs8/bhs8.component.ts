import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-bhs8',
  templateUrl: './bhs8.component.html',
  styleUrls: ['./bhs8.component.scss']
})
export class Bhs8Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

}
