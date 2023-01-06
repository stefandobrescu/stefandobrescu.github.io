import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DevlogPageComponent } from './feature/devlog-page/devlog-page.component';

@NgModule({
  declarations: [DevlogPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DevlogPageModule { }
