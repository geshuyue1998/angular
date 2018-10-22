import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfinishdetailComponent } from './unfinishdetail.component';

describe('UnfinishdetailComponent', () => {
  let component: UnfinishdetailComponent;
  let fixture: ComponentFixture<UnfinishdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfinishdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfinishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
