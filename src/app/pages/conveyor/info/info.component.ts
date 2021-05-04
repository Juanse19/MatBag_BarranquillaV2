import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/interfaces/common/smart-table';

@Component({
  selector: 'ngx-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  ngOnInit(): void {
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: false,
    },
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      firstName: {
        title: 'Conveyors',
        type: 'string',
      },
      lastName: {
        title: 'Hora Activación',
        type: 'string',
      },
      login: {
        title: 'Tiempo Encendido',
        type: 'string',
      },
      email: {
        title: 'Duración ultimo paro',
        type: 'string',
      },
      // age: {
      //   title: 'Age',
      //   type: 'number',
      // },
    },
  };

  settings1 = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: false,
    },
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      firstName: {
        title: 'Conveyors',
        type: 'string',
      },
      lastName: {
        title: 'Estado',
        type: 'string',
      },
      login: {
        title: 'Energia',
        type: 'string',
      },
      email: {
        title: 'Corriente',
        type: 'string',
      },
      age: {
        title: 'Mensaje',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
