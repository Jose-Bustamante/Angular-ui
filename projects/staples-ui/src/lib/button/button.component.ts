import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button', // pl is our prefix
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string | null = 'Click me!';
  @Input('pink') pink: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}