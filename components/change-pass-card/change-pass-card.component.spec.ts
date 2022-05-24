import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassCardComponent } from './change-pass-card.component';

describe('ChangePassCardComponent', () => {
  let component: ChangePassCardComponent;
  let fixture: ComponentFixture<ChangePassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePassCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
