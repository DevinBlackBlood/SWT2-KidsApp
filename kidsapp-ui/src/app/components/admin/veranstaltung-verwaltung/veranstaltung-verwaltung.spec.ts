import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranstaltungVerwaltung } from './veranstaltung-verwaltung';

describe('VeranstaltungVerwaltung', () => {
  let component: VeranstaltungVerwaltung;
  let fixture: ComponentFixture<VeranstaltungVerwaltung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeranstaltungVerwaltung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeranstaltungVerwaltung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
