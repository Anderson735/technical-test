import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import {
  CreateEditUserComponent,
  UserComponent,
  ModalDeleteComponent
} from './components';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    CreateEditUserComponent,
    ModalDeleteComponent
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
