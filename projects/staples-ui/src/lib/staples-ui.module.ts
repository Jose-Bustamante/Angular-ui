import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav';

import { ButtonComponent } from './button/button.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [ButtonComponent, SideNavComponent],
  imports: [CommonModule, BrowserAnimationsModule, BrowserModule, MatSidenavModule],
  exports: [ButtonComponent, SideNavComponent]
})
export class StaplesUiModule { }
