import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesdetailComponent } from './coursesdetail.component';

describe('CoursesdetailComponent', () => {
  let component: CoursesdetailComponent;
  let fixture: ComponentFixture<CoursesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
