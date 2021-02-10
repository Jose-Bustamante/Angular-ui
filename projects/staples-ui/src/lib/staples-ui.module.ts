import { NgModule } from '@angular/core';
import { StaplesUiComponent } from './staples-ui.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [StaplesUiComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [StaplesUiComponent, ButtonComponent]
})
export class StaplesUiModule { }
