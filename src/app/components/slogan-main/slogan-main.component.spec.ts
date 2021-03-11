import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganMainComponent } from './slogan-main.component';

describe('SloganMainComponent', () => {
  let component: SloganMainComponent;
  let fixture: ComponentFixture<SloganMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SloganMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SloganMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
