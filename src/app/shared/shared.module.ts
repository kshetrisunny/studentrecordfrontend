import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BarchartComponent } from './components/barchart/barchart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PiechartComponent } from './components/piechart/piechart.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BarchartComponent,
    PiechartComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    HighchartsChartModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BarchartComponent,
    PiechartComponent
  ]
})
export class SharedModule { }
