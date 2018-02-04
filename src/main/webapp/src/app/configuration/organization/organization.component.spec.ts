import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationConfigComponent } from './organization.component';

describe('OrganizationConfigComponent', () => {
  let component: OrganizationConfigComponent;
  let fixture: ComponentFixture<OrganizationConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
