import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageScrollspyComponent } from './homepage-scrollspy.component';

describe('HomapageScrollspyComponent', () => {
  let component: HomepageScrollspyComponent;
  let fixture: ComponentFixture<HomepageScrollspyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageScrollspyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
