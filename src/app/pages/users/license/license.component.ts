import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import {ApiGetService} from '../../../@auth/components/register/apiGet.services';
import { NbAccessChecker } from '@nebular/security';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDateService, NbToastrService } from '@nebular/theme';


interface licens {
  // Id: string;
  // Parameter: string;
  Value?: string;
}

let MAKEData: licens
{

};

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
  public licesData: licens[]=[];

  get Value() { return this.licenForm.get('Value'); }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: HttpService,
    private apiGetComp: ApiGetService,
    public accessChecker: NbAccessChecker,
    private toasterService: NbToastrService,
    protected dateService: NbDateService<Date>
  ) { 

    this.apiGetComp.GetJson(this.api.apiUrlNode1 +'/api/getlicenses').subscribe((res: any) => {
      this.licesData.values=res[0].Value;
      console.log('Numero de licencias: ', this.licesData.values);

      

    });

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
    this.initUserForm();
  }

  initUserForm() {
    this.licenForm = this.fb.group({
     
      Value: this.fb.control('', [ Validators.min(1),Validators.max(120)]),
      
    }); 
  }

  // loadLices(){
    
  //   this.licenForm.setValue({
  //     Value: this.licesData[0].Value ? this.licesData[0].Value : '',
  //   });
  // }

  back() {
    // this.mostrar= false;
    this.router.navigate(['/pages/users/list']);
  }

  handleSuccessResponse() {
    this.toasterService.success('', '¡Guardado con exito!' );
    this.back();
  }
   
  handleWrongResponse() {
    this.toasterService.danger('', 'Error almacenando ');
  }

  saveData(){
  debugger
    let formulario = this.licenForm.value;
  
    if(formulario.Value){
  
    MAKEData = {
      // Parameter: 'Matec',
      Value: formulario.Value
    }
    debugger
    if (MAKEData == undefined) {
      this.handleWrongResponse();
    }else{
      this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/api/postdatalicens', MAKEData).subscribe((res:any)=>{
      this.handleSuccessResponse();
    });
  }
    
  } 
    // alert('se agregó: ' +  MAKEData.Value)
    // console.log('Data: ', MAKEData);
    // this.back()
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
