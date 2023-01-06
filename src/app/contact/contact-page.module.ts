import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './feature/contact-page/contact-page.component';
import { SharedModule } from '../shared/shared.module';
import { MessageFormComponent } from './ui/message-form/message-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactPageComponent,
    MessageFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([])
  ],
  exports: [
    ContactPageComponent,
    MessageFormComponent
  ]
})
export class ContactPageModule { }
