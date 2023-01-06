import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DevlogPageComponent } from '../devlog/feature/devlog-page/devlog-page.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'version-control', component: DevlogPageComponent}
    ])
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
