import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModsRoutingModule } from './mods-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ModsHomeComponent, ModalComponent],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
