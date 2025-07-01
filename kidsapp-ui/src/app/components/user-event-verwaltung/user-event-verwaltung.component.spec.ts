import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventVerwaltungComponent } from './user-event-verwaltung.component';

describe('UserEventVerwaltungComponent', () => {
  let component: UserEventVerwaltungComponent;
  let fixture: ComponentFixture<UserEventVerwaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEventVerwaltungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEventVerwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
