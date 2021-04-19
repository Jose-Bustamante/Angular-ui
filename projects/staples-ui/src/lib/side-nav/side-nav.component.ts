import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'ui-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showFiller = false;
  @ViewChild('drawer') drawerRef!: MatDrawer;
  constructor() { }

  ngOnInit(): void {

  }

  onCustomClick(): void {
    console.log('TOGGLLEEEE');
    this.drawerRef.toggle();
  }

}
