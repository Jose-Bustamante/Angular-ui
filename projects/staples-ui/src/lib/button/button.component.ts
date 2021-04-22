import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-button', // pl is our prefix
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string | null = 'Click me!';
  @Input('pink') pink: boolean = false;
  @Output() valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event): void {
    console.log('Clicked Beach', event);
    this.valueChanged.emit('test');
  }
}