import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showFiller = false;
  @ViewChild('drawer') input: any;
  constructor() { }

  ngOnInit(): void {

  }

  onCustomClick(): void {
    console.log('TOGGLLEEEE');
    this.input.toggle();
  }

}
