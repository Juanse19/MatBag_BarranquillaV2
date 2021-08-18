import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';
import { GridComponent, PageSettingsModel, FilterService, FilterType, SortService, FilterSettingsModel  } from '@syncfusion/ej2-angular-grids';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { DatePipe } from '@angular/common'; 

export interface baggage {
  BagTag: string;
  FechaBma: string;
  BhsId: number;
  TipoEquipaje: number;
  FechaEds: string;
  estado1: string;
  estado2: string;
}

export interface BagData {
  CreatedDate: string;
  Name: string;
  Description: string;
}

@Component({
  selector: 'ngx-bagtag-tracking',
  templateUrl: './bagtag-tracking.component.html',
  styleUrls: ['./bagtag-tracking.component.scss']
})
export class BagtagTrackingComponent implements OnInit {

  public airForm: FormGroup;

  public baggageData: baggage[];

  public bagdata: BagData[] = [];

  private alive = true;

  public filterOptions: FilterSettingsModel;

  public pageSettings: PageSettingsModel;

  get Bag() { return this.airForm.get('Bag'); }

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private miDatePipe: DatePipe,
    private api: HttpService,
    protected dateService: NbDateService<Date>) { }

  ngOnInit(): void {
    // this.ChargeData();
    this.initForm();
    this.filterOptions = {
      type: 'Menu',
   };
  }

  initForm() {
    this.airForm = this.fb.group({
      Bag: ['', Validators.required]
      // EndTime: ['', Validators.required],
    });
  }

  date(Bag: string){
    debugger

    // const fechaFormateada = this.miDatePipe.transform(StartTime, 'yyyy-MM-dd');

    // console.log('fecha: ', fechaFormateada);
    

    console.log('test: ', Bag);

    if (Bag == null) {
      alert('No hay date..!')
    } else {
      debugger
      this.http.get(this.api.apiUrlNode1 + '/GetBagData?bagid='+ Bag)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.bagdata=res;
      console.log('Da:', res );
      
    });
    }

  }

  ChargeData() {
    this.http.get(this.api.apiUrlNode1 + '/eq')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      console.log("TeamData:", res);
      this.baggageData = res;
      // this.source.load(res);
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/eq')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.baggageData = res;
        // this.source.load(res);
      });
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
