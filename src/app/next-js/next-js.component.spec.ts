import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextJsComponent } from './next-js.component';

describe('NextJsComponent', () => {
  let component: NextJsComponent;
  let fixture: ComponentFixture<NextJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
