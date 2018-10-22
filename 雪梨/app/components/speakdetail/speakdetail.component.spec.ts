import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakdetailComponent } from './speakdetail.component';

describe('SpeakdetailComponent', () => {
  let component: SpeakdetailComponent;
  let fixture: ComponentFixture<SpeakdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
