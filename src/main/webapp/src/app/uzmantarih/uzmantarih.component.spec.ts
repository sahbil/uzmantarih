import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UzmantarihComponent } from './uzmantarih.component';

describe('UzmantarihComponent', () => {
  let component: UzmantarihComponent;
  let fixture: ComponentFixture<UzmantarihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UzmantarihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzmantarihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
