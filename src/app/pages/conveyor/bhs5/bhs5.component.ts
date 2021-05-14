import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-bhs5',
  templateUrl: './bhs5.component.html',
  styleUrls: ['./bhs5.component.scss']
})
export class Bhs5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }
}
