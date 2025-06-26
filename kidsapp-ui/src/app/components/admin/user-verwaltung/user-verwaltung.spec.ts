import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerwaltung } from './user-verwaltung';

describe('UserVerwaltung', () => {
  let component: UserVerwaltung;
  let fixture: ComponentFixture<UserVerwaltung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserVerwaltung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVerwaltung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
