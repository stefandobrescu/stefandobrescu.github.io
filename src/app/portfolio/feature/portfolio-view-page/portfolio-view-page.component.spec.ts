import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioViewPageComponent } from './portfolio-view-page.component';

describe('PortfolioViewPageComponent', () => {
  let component: PortfolioViewPageComponent;
  let fixture: ComponentFixture<PortfolioViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
