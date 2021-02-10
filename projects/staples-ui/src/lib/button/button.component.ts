import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pl-button', // pl is our prefix
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string | null = 'Click me!';
  @Input('pink') pink: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}