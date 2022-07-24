import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphIconComponent } from './graph-icon.component';

describe('GraphIconComponent', () => {
  let component: GraphIconComponent;
  let fixture: ComponentFixture<GraphIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
