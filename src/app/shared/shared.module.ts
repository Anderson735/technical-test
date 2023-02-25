import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DatePipe } from './pipes/date.pipe';
import { UppercaseDirective } from './directives/uppercase.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    DatePipe,
    UppercaseDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
