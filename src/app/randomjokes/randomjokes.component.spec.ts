import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomjokesComponent } from './randomjokes.component';

describe('RandomjokesComponent', () => {
  let component: RandomjokesComponent;
  let fixture: ComponentFixture<RandomjokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomjokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomjokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
