import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './feature/home-page/home-page.component';
import { HomepageScrollspyComponent } from './ui/homepage-scrollspy/homepage-scrollspy.component';
import { ScrollSpyDirective } from './utils/scroll-spy.directive';
import { RecentCardComponent } from './ui/recent-card/recent-card.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    HomepageScrollspyComponent,
    RecentCardComponent,
    ScrollSpyDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([])
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
