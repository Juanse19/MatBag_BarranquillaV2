import { Component, OnInit } from '@angular/core';
import { GridComponent, PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  
pdfMake.vfs = pdfFonts.pdfMake.vfs;  

export interface bag {
  BagID: number;
  estado: number;
}

class Databag {
  customerName: 'Palmerola';
  address: 'Honduras';
  contactNo: '12345678';
  email: 'palmerola@pal.com.co';
  BagData: bag[]=[];
}

@Component({
  selector: 'ngx-photoelectric',
  templateUrl: './photoelectric.component.html',
  styleUrls: ['./photoelectric.component.scss']
})
export class PhotoelectricComponent implements OnInit {

  public bagData: bag[];

  private alive = true;

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  constructor(private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.ChargeData();
    this.pageSettings = { pageSize: 5 };
    this.filterOptions = {
      type: 'Menu'
   };
  }

  ChargeData() {
    this.http.get(this.api.apiUrlNode1 + '/fc')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      console.log("bagData:", res);
      this.bagData = res;
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/fc')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.bagData = res;
      });
    });
  }

  dataBag = new Databag() 
  
  generatePDF(action = 'open') {
    debugger
    let docDefinition = {
      content: [
        {
          text: 'DAILY CBIS BAG VOLUME REPORT',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'Daily CBIS Bag Volume Report',
          fontSize: 18,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: 'Palmerola',
                bold:true
              },
              { text: 'Honduras' },
              { text: 'palme@pal.com.co' },
              { text: 12345678 }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              { 
                text: `Bill No : ${((Math.random() *1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Order Details',
          style: 'sectionHeader'
        },
        // {
        //   table: {
        //     headerRows: 1,
        //     widths: [ 'auto', 'auto', 'auto'],
        //     body: [
        //       // ['BagId', 'Estado'],
        //       // ...this.dataBag.BagData.map(p => ([p.BagID, p.estado])),
        //       // [{text: 'Total Amount', colSpan: 3}, {}, {}, ]
        //     ]
        //   }
        // },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        // {
        //     text: this.invoice.additionalDetails,
        //     margin: [0, 0 ,0, 15]          
        // },
        // {
        //   columns: [
        //     [{ qr: `${this.invoice.customerName}`, fit: '50' }],
        //     [{ text: 'Signature', alignment: 'right', italics: true}],
        //   ]
        // },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
            ul: [
              'Order can be return in max 10 days.',
              'Warrenty of the product will be subject to the manufacturer terms and conditions.',
              'This is system generated invoice.',
            ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
    };

    if(action==='download'){
      pdfMake.createPdf(docDefinition).download();
    }else if(action === 'print'){
      pdfMake.createPdf(docDefinition).print();      
    }else{
      pdfMake.createPdf(docDefinition).open();      
    }

  }

}
