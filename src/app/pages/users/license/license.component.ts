import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import {ApiGetService} from '../../../@auth/components/register/apiGet.services';
import { NbAccessChecker } from '@nebular/security';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class LicenseComponent implements OnInit {

  licenForm: FormGroup;
  public select = false;
  private alive = true;
  mostrar: Boolean;

  get licens() { return this.licenForm.get('licens'); }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public accessChecker: NbAccessChecker,
  ) { 
    this.accessChecker.isGranted('edit', 'users').subscribe((res: any) => {
      if(res){ 
        this.select = false;
        this.mostrar = false;
      }else {
        this.select=true;
        this.mostrar=true;
      }
      
    });
  }

  ngOnInit(): void {
  }

  initUserForm() {
    this.licenForm = this.fb.group({
     
      licens: this.fb.control('4', [Validators.minLength(3), Validators.maxLength(20)]),
      
    }); 
  }

  back() {
    // this.mostrar= false;
    this.router.navigate(['/pages/users/list']);
  }

  save(){
    console.log('Licencia..!');
    
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
