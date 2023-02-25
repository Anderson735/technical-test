import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomValidatorDirective } from './validators/custom-validator.directive';



@NgModule({
  declarations: [
    CustomValidatorDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
