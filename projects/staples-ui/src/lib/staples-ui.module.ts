import { NgModule } from '@angular/core';
import { StaplesUiComponent } from './staples-ui.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [StaplesUiComponent, ButtonComponent],
  imports: [
  ],
  exports: [StaplesUiComponent]
})
export class StaplesUiModule { }
