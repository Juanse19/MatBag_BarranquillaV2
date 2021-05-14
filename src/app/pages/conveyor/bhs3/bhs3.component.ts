import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-bhs3',
  templateUrl: './bhs3.component.html',
  styleUrls: ['./bhs3.component.scss']
})
export class Bhs3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

}
