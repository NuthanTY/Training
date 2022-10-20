import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailcheckComponent } from './emailcheck.component';

describe('EmailcheckComponent', () => {
  let component: EmailcheckComponent;
  let fixture: ComponentFixture<EmailcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
