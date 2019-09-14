import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeModalComponent } from './badge-modal.component';

describe('BadgeModalComponent', () => {
  let component: BadgeModalComponent;
  let fixture: ComponentFixture<BadgeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
