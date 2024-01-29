import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9Component } from './index9.component';

describe('Index9Component', () => {
  let component: Index9Component;
  let fixture: ComponentFixture<Index9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Index9Component]
    });
    fixture = TestBed.createComponent(Index9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
