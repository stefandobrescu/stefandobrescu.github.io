import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlogPageComponent } from './devlog-page.component';

describe('DevlogPageComponent', () => {
  let component: DevlogPageComponent;
  let fixture: ComponentFixture<DevlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevlogPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
