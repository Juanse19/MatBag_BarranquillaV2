import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProgressBar, ProgressAnnotation, IProgressValueEventArgs, ILoadedEventArgs, ProgressTheme,
  AnimationModel } from '@syncfusion/ej2-progressbar';
import { EmitType } from '@syncfusion/ej2-base';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { consume } from '../_interfaces/MatBag.model'
import { takeWhile } from 'rxjs/operators';
ProgressBar.Inject(ProgressAnnotation);

interface conzone {
  ZoneName: string;
  KWh: string;
  value: number;
}

@Component({
  selector: 'ngx-consum-zone',
  templateUrl: './consum-zone.component.html',
  styleUrls: ['./consum-zone.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsumZoneComponent implements OnInit {

    public clearTimeout1: number;
    public clearTimeout2: number;
    public annotationColors: {
        material: string,
        fabric: string,
        bootstrap: string,
        bootstrap4: string,
        highcontrast: string,
        tailwind: string
    } = { material: '#e91e63', fabric: '#black', bootstrap: '#black', bootstrap4: '#black', highcontrast: '#black', tailwind: '#black' };
    public load: EmitType<ILoadedEventArgs> = (args: ILoadedEventArgs) => {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        // args.progressBar.theme = <ProgressTheme>(selectedTheme.charAt(0).toUpperCase() +
        //     selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if (args.progressBar.element.id === 'label-container') {
            // tslint:disable-next-line:max-line-length
            //args.progressBar.annotations[0].content = '<div id="point1" class="plabeltxt" style="color: ' + this.annotationColors[selectedTheme] + ';font-size:25px "><span>50%</span></div>';
        }
    }
    public type1: string = 'Circular';
    public type2: string = 'Circular';
    public type3: string = 'Circular';
    public type4: string = 'Circular';
    public type5: string = 'Circular';
    public type6: string = 'Circular';
    public type7: string = 'Circular';
    public type8: string = 'Circular';
    public type9: string = 'Circular';
    public type10: string = 'Circular';
    public type11: string = 'Circular';
    public type12: string = 'Circular';
    public type13: string = 'Circular';

    public min1: number = 0;
    public max1: number = 100;
    public value1: number = 80;
    public startAngle1: number = 180;
    public endAngle1: number = 180;
    public width: string = '100';
    public height: string = '100';

    public min2: number = 0;
    public max2: number = 100;
    public value2: number = 50;

    public min3: number = 0;
    public max3: number = 100;
    public value3: number = 73;

    public min4: number = 0;
    public max4: number = 100;
    public value4: number = 30;
    public startAngle4: number = 180;
    public endAngle4: number = 180;

    public min5: number = 0;
    public max5: number = 100;
    public value5: number = 23;

    public min6: number = 0;
    public max6: number = 100;
    public value6: number = 23;

    public min7: number = 0;
    public max7: number = 100;
    public value7: number = 23;

    public min8: number = 0;
    public max8: number = 100;
    public value8: number = 23;

    public min9: number = 0;
    public max9: number = 100;
    public value9: number = 23;

    public min10: number = 0;
    public max10: number = 100;
    public value10: number = 23;

    public min11: number = 0;
    public max11: number = 100;
    public value11: number = 23;
    
    public min12: number = 0;
    public max12: number = 100;
    public value12: number = 23;

    public min13: number = 0;
    public max13: number = 100;
    public value13: number = 23;

    public animation: AnimationModel = { enable: true, duration: 2000, delay: 0 };

    @ViewChild('annotation1')
    public annotation: ProgressBar;

    @ViewChild('annotation2')
    public pausePlay: ProgressBar;

    @ViewChild('annotation3')
    public downloadProgress: ProgressBar;

    @ViewChild('annotation4')
    public annotation4: ProgressBar;

    @ViewChild('annotation5')
    public continuoPlay: ProgressBar;

    @ViewChild('annotation6')
    public sfcZone: ProgressBar;

    @ViewChild('annotation7')
    public muZone: ProgressBar;

    @ViewChild('annotation8')
    public clZone: ProgressBar;

    @ViewChild('annotation9')
    public alZone: ProgressBar;

    @ViewChild('annotation10')
    public meZone: ProgressBar;

    @ViewChild('annotation11')
    public iboZone: ProgressBar;

    @ViewChild('annotation12')
    public ibosZone: ProgressBar;

    @ViewChild('annotation13')
    public ibZone: ProgressBar;

    @ViewChild('annotation14')
    public ssZone: ProgressBar;

    @ViewChild('annotation15')
    public osrZone: ProgressBar;

    // public onClick = () => {
    //     this.annotation.refresh();
    //     this.pausePlay.refresh();
    //     this.downloadProgress.refresh();
    // }
    // public progressComplete(args: IProgressValueEventArgs): void {
    //     clearTimeout(this.clearTimeout1);
        
    // }
    // public progressComplete1(args: IProgressValueEventArgs): void {
    //     clearTimeout(this.clearTimeout2);
        
    // }

    private alive=true;

    public consumeData: consume[]=[];

    public zonConsData: conzone[]=[];

    constructor(
      private http: HttpClient,
      private api: HttpService) {
      }

      ngOnInit(): void {
        this.consumeCharge();
        this.consumeZoneCharge();
      }
    
      public consumeCharge(){
        this.http.get(this.api.apiUrlNode1 + '/GetKwhZone')
        .pipe(takeWhile(() => this.alive))
        .subscribe((res: any)=>{
          this.consumeData = res;
          console.log('consume Zons', this.consumeData);
        });
      }

      public consumeZoneCharge(){
        this.http.get(this.api.apiUrlNode1 + '/consume')
        .pipe(takeWhile(() => this.alive))
        .subscribe((res: any)=>{
          this.zonConsData = res;
          console.log('Energy Zones', this.zonConsData);
        });
      }

}
