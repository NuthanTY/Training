import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSadminComponent } from './add-sadmin.component';

describe('AddSadminComponent', () => {
  let component: AddSadminComponent;
  let fixture: ComponentFixture<AddSadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
