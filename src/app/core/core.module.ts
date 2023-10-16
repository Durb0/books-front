import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './containers/navbar/navbar.component';
import {ThemeModule} from "../theme/theme.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
