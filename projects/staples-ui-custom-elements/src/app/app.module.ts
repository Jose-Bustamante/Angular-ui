import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';

import {StaplesUiModule} from '../../../staples-ui/src/lib/staples-ui.module';
import {ButtonComponent} from '../../../staples-ui/src/lib/button/button.component';
import {SideNavComponent} from '../../../staples-ui/src/lib/side-nav/side-nav.component';
@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StaplesUiModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const ceButton = createCustomElement(ButtonComponent, { injector: this.injector })
    customElements.define("ce-button", ceButton);

    const ceSideNav = createCustomElement(SideNavComponent, { injector: this.injector })
    customElements.define("ce-side-nav", ceSideNav);
  }
}
