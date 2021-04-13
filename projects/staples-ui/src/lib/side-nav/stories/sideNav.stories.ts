import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav';

import { SideNavComponent } from '../side-nav.component';

export default {
  title: 'Atomics/SideNav',
  component: SideNavComponent,
  decorators: [
    moduleMetadata({
        imports: [BrowserAnimationsModule, BrowserModule, MatSidenavModule]
    })
  ],
  declarations: [SideNavComponent],
} as Meta;

const Template: Story<SideNavComponent> = (args: SideNavComponent) => ({
  component: SideNavComponent,
  props: {
    ...args
  },
});

export const SideNav = Template.bind({});
SideNav.args = {};
