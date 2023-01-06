import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './feature/portfolio-page/portfolio-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectListViewComponent } from './ui/project-list-view/project-list-view.component';
import { PortfolioViewPageComponent } from './feature/portfolio-view-page/portfolio-view-page.component';



@NgModule({
  declarations: [
    PortfolioPageComponent,
    ProjectListViewComponent,
    PortfolioViewPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PortfolioPageModule { }
