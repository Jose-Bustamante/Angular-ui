import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import {StaplesUiModule} from '../../../staples-ui/src/lib/staples-ui.module';
import {ButtonComponent} from '../../../staples-ui/src/lib/button/button.component';

@NgModule({

  imports: [
    BrowserModule,
    StaplesUiModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(ButtonComponent, { injector: this.injector })
    customElements.define("ce-button", element);
  }
}
