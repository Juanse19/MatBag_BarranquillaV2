/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NbMenuItem } from '@nebular/theme';
import { NbAccessChecker } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  constructor(private accessChecker: NbAccessChecker) {}

  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu = [
      {
        title: 'BHS Salida',
        icon: 'monitor-outline',
        link: '/pages/iot-dashboard',
        children: [
          {
            title: 'Dashboard Salida',
            link: '/pages/iot-dashboard',
          },
          
          {
            title: 'Línea de transferencia',
            link: '/pages/conveyor/bhs1',
          },
          {
            title: 'alimentación de seguridad',
            link: '/pages/conveyor/bhs2',
          },
          {
            title: 'Make Up',
            link: '/pages/conveyor/bhs3',
          },
          {
            title: 'Línea de alarma',
            link: '/pages/conveyor/bhs4',
          },
          {
            title: 'Registro de alimentación de seguridad',
            link: '/pages/conveyor/bhs5',
          },
          {
            title: 'Línea de resolución en pantalla',
            link: '/pages/conveyor/bhs6',
          },
          {
            title: 'Línea clara',
            link: '/pages/conveyor/bhs7',
          },
          {
            title: 'codificación manual',
            link: '/pages/conveyor/bhs8',
          },
        ],
      },
    ];

    const menu: NbMenuItem[] = [
      {
        title: 'FEATURES',
        group: true,
      },
      {
        title: 'Layout',
        icon: 'layout-outline',
        children: [
          {
            title: 'Stepper',
            link: '/pages/layout/stepper',
          },
          {
            title: 'List',
            link: '/pages/layout/list',
          },
          {
            title: 'Infinite List',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Accordion',
            link: '/pages/layout/accordion',
          },
          {
            title: 'Tabs',
            pathMatch: 'prefix',
            link: '/pages/layout/tabs',
          },
        ],
      },
      {
        title: 'Forms',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Form Inputs',
            link: '/pages/forms/inputs',
          },
          {
            title: 'Form Layouts',
            link: '/pages/forms/layouts',
          },
          {
            title: 'Buttons',
            link: '/pages/forms/buttons',
          },
          {
            title: 'Datepicker',
            link: '/pages/forms/datepicker',
          },
        ],
      },
      {
        title: 'UI Features',
        icon: 'keypad-outline',
        link: '/pages/ui-features',
        children: [
          {
            title: 'Grid',
            link: '/pages/ui-features/grid',
          },
          {
            title: 'Icons',
            link: '/pages/ui-features/icons',
          },
          {
            title: 'Typography',
            link: '/pages/ui-features/typography',
          },
          {
            title: 'Animated Searches',
            link: '/pages/ui-features/search-fields',
          },
        ],
      },
      {
        title: 'Modal & Overlays',
        icon: 'browser-outline',
        children: [
          {
            title: 'Dialog',
            link: '/pages/modal-overlays/dialog',
          },
          {
            title: 'Window',
            link: '/pages/modal-overlays/window',
          },
          {
            title: 'Popover',
            link: '/pages/modal-overlays/popover',
          },
          {
            title: 'Toastr',
            link: '/pages/modal-overlays/toastr',
          },
          {
            title: 'Tooltip',
            link: '/pages/modal-overlays/tooltip',
          },
        ],
      },
      {
        title: 'Extra Components',
        icon: 'message-circle-outline',
        children: [
          {
            title: 'Calendar',
            link: '/pages/extra-components/calendar',
          },
          {
            title: 'Progress Bar',
            link: '/pages/extra-components/progress-bar',
          },
          {
            title: 'Spinner',
            link: '/pages/extra-components/spinner',
          },
          {
            title: 'Alert',
            link: '/pages/extra-components/alert',
          },
          {
            title: 'Calendar Kit',
            link: '/pages/extra-components/calendar-kit',
          },
          {
            title: 'Chat',
            link: '/pages/extra-components/chat',
          },
        ],
      },
      {
        title: 'Maps',
        icon: 'map-outline',
        children: [
          {
            title: 'Google Maps',
            link: '/pages/maps/gmaps',
          },
          {
            title: 'Leaflet Maps',
            link: '/pages/maps/leaflet',
          },
          {
            title: 'Bubble Maps',
            link: '/pages/maps/bubble',
          },
          {
            title: 'Search Maps',
            link: '/pages/maps/searchmap',
          },
        ],
      },
      {
        title: 'Charts',
        icon: 'pie-chart-outline',
        children: [
          {
            title: 'Echarts',
            link: '/pages/charts/echarts',
          },
          {
            title: 'Charts.js',
            link: '/pages/charts/chartjs',
          },
          {
            title: 'D3',
            link: '/pages/charts/d3',
          },
        ],
      },
      {
        title: 'Editors',
        icon: 'text-outline',
        children: [
          {
            title: 'TinyMCE',
            link: '/pages/editors/tinymce',
          },
          {
            title: 'CKEditor',
            link: '/pages/editors/ckeditor',
          },
        ],
      },
      {
        title: 'Tables & Data',
        icon: 'grid-outline',
        children: [
          {
            title: 'Order Table',
            link: '/pages/tables/OrderTable',
          },
          {
            title: 'SMART Order Table',
            link: '/pages/tables/SmartOrderTable',
          },
          {
            title: 'Smart Table',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Tree Grid',
            link: '/pages/tables/tree-grid',
          },
        ],
      },
      {
        title: 'Miscellaneous',
        icon: 'shuffle-2-outline',
        children: [
          {
            title: '404',
            link: '/pages/miscellaneous/404',
          },
        ],
      },
      
    ];
    
    const userMenu: NbMenuItem = {
      title: 'Usuarios',
      icon: 'people-outline',
      link: '/pages/users/list',
      children: undefined,
    };
    const analyticsMenu: NbMenuItem = {
      title: 'Analitica',
      icon: 'bar-chart-outline',
      // link: '/pages/analytics/analytics',
      children: [
        {
          title: 'Ocupación',
          link: '/pages/analytics/ocupacion',
        },
        {
          title: 'Ordenes',
          link: '/pages/analytics/ordenes',
        },
        {
          title: 'Ordenes no transportables',
          link: '/pages/analytics/ordenesNotWips',
        },
        {
          title: 'Predictivo',
          link: '/pages/analytics/predictivo',
        },
      ],
    };

    const sicsyncroMenu: NbMenuItem = {
      title: 'Inducción',
      icon: 'archive-outline',
      // link: '/pages/analytics/analytics',
      children: [
        {
          title: 'Sic',
          link: '/pages/sic-syncro/Sic',
        },
        {
          title: 'Syncro',
          link: '/pages/sic-syncro/syncro',
        },
      ],
    };

    const functionMenu: NbMenuItem = {
      title: 'Informacion',
      icon: 'archive-outline',
      // link: '/pages/analytics/analytics',
      children: [
        
        {
          title: 'Equipos',
          link: '/pages/conveyor/team',
        },
        {
          title: 'Funcionamiento del sistema',
          link: '/pages/conveyor/functioning',
        },
        {
          title: 'Paros por acumulación',
          link: '/pages/conveyor/accumulation',
        },
        
        // {
        //   title: 'Info',
        //   link: '/pages/conveyor/info',
        // },
      ],
    };

    const paraMenu: NbMenuItem = {
      title: 'Parametrización',
      icon: 'book-outline',
      // link: '/pages/charts/charts-report',
      children:[
        {
          title: 'Asignar Aeronilínea al Make Up',
          link: '/pages/conveyor/assign',
        },
      ],
    };

    const repocbisMenu: NbMenuItem = {
      title: 'Reportes CBIS',
      icon: 'pie-chart-outline',
      // link: '/pages/charts/charts-report',
      children:[
        {
          title: 'Datos del equipaje',
          link: '/pages/charts/report',
        },
        {
          title: 'Seguimiento en Fotoceldas Criticas',
          link: '/pages/charts/charts-report',
        },
        {
          title: 'Fallas en el BHS',
          link: '/pages/charts/charts-report',
        },
        {
          title: 'Eventos del BHS',
          link: '/pages/charts/charts-report',
        },
        {
          title: 'Estadísticas del EDS ',
          link: '/pages/charts/charts-report',
        },
        {
          title: 'Desempeño del ATR',
          link: '/pages/charts/charts-report',
        },
        {
          title: 'Volumen del sistema de equipaje',
          link: '/pages/charts/charts-report',
        },
        {
          title: 'Estadísticas del CBRA',
          link: '/pages/charts/report',
        },
      ],
    };

    const orderMenu: NbMenuItem = {
      title: 'Ordenes',
      icon: 'grid-outline',
      link: '/pages/tables/OrderTable',
      children: undefined,
    };

    // const reportMenu: NbMenuItem = {
    //   title: 'Reporte',
    //   icon: 'pie-chart-outline',
    //   link: '/pages/charts/report',
    //   children: undefined,
    // };

    const repoMenu: NbMenuItem = {
      title: 'Reportes',
      icon: 'pie-chart-outline',
      // link: '/pages/charts/charts-report',
      children:[
        {
          title: 'Reporte Maquina',
          link: '/pages/charts/report',
        },
        {
          title: 'Reporte Sistema',
          link: '/pages/charts/charts-report',
        },
        // {
        //   title: 'Reportes',
        //   link: '/pages/charts/charts-reports2',
        // },
      ],
    };

    const alarmMenu: NbMenuItem = {
      title: 'Alarmas',
      icon: 'bell-outline',
      link: '/pages/tables/alarms',
      children: undefined,
    };

    const registerMenu: NbMenuItem ={
      title: 'Auth',
      icon: 'lock-outline',
      children: [ 
        {
          title: 'Login',
          link: '/auth/login',
        },
        {
          title: 'Register',
          link: '/auth/register',
        },
        {
          title: 'Request Password',
          link: '/auth/request-password',
        },
        {
          title: 'Reset Password',
          link: '/auth/reset-password',
        },
      ],
    };
    return this.accessChecker.isGranted('view', 'fullMenu')
      .pipe(map(hasAccess => {
        if (hasAccess) {
          // return [...dashboardMenu, orderMenu, userMenu, ...menu,registerMenu];
          // return [...dashboardMenu, orderMenu, reportMenu, analyticsMenu, userMenu, alarmMenu, registerMenu];
          // return [...dashboardMenu, orderMenu, sicsyncroMenu, repoMenu, analyticsMenu, userMenu, alarmMenu];
          return [...dashboardMenu, paraMenu, functionMenu, repocbisMenu, userMenu, alarmMenu];
        } else {
          //return [...dashboardMenu, ...menu];
          return [...dashboardMenu, alarmMenu];
        }
      }));
  }
}
