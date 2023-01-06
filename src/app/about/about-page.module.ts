import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './feature/about-page/about-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutPageModule { }
