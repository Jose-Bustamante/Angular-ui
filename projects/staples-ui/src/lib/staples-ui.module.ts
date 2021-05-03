import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { ButtonComponent } from './button/button.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [ButtonComponent, SideNavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ButtonComponent, SideNavComponent]
})
export class StaplesUiModule { }
