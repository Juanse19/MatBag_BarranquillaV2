import { Component, OnDestroy, OnInit } from '@angular/core';
// import { UspStoppagesData } from '../../../@core/interfaces/iot/usp-stoppages-by-baggage';
import {
  NgxFilterByNumberComponent,
} from '../../../@components/custom-smart-table-components/filter-by-number/filter-by-number.component';


@Component({
  selector: 'ngx-accumulation',
  templateUrl: './accumulation.component.html',
  styleUrls: ['./accumulation.component.scss']
})
export class AccumulationComponent  {

  UspStoppagesByBaggage =  [];

  settings = {
    mode: 'external',
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    
    columns: {
      conveyor: {
        title: 'Conveyors',
        type: 'string',
      },
      duracionParo: {
        title: 'Duración para',
        filter: {
          type: 'custom',
          component: NgxFilterByNumberComponent,
        },
      },
      estado: {
        title: 'Estado del conveyor',
        type: 'string',
      },
    },
  };

  // constructor(private UspStoppagesByBaggageService: UspStoppagesData) {}

 ngOnInit() {
  // this.UspStoppagesByBaggageService.getUspData().subscribe((data: any[]) => {
  //  this.UspStoppagesByBaggage = data;
  // });
 }

  // source: DataSource;

  // constructor(private UspStoppagesByBaggageService: UspStoppagesData ,
  //   private toastrService: NbToastrService) {
  //   this.loaData();
  // }

  // loaData() {
  //   this.source = this.UspStoppagesByBaggageService.UDataSource;
  // }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnDestroy() {
    
  }

}
