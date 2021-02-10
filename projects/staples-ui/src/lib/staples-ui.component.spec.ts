import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaplesUiComponent } from './staples-ui.component';

describe('StaplesUiComponent', () => {
  let component: StaplesUiComponent;
  let fixture: ComponentFixture<StaplesUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaplesUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaplesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
