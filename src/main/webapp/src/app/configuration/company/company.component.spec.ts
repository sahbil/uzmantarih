import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyConfigComponent } from './company.component';

describe('CompanyConfigComponent', () => {
  let component: CompanyConfigComponent;
  let fixture: ComponentFixture<CompanyConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
