import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
