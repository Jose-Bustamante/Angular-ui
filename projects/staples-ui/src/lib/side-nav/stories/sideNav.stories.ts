import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import {MatSidenavModule} from '@angular/material/sidenav';

import { SideNavComponent } from '../side-nav.component';

export default {
  title: 'Atomics/SideNav',
  component: SideNavComponent,
  decorators: [
    moduleMetadata({
      declarations: [SideNavComponent],
      imports: [CommonModule, BrowserAnimationsModule, BrowserModule, MatSidenavModule]
    })
  ],
} as Meta;

const Template: Story<SideNavComponent> = (args: SideNavComponent) => ({
  component: SideNavComponent,
  template: `<div>OLA QUE ASHE<ui-side-nav></ui-side-nav></div>`,
  props: {
    ...args
  }
});

export const SideNav = Template.bind({});
SideNav.args = {};
