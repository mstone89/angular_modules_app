import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModsRoutingModule } from './mods-routing.module';


@NgModule({
  declarations: [ModsHomeComponent],
  imports: [
    CommonModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
