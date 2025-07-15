-- adresse (10 Einträge)
INSERT INTO public.adresse (id, land, ort, plz, strasse) VALUES
(1, 'Deutschland', 'Berlin', '10115', 'Musterstraße 12'),
(2, 'Deutschland', 'Hamburg', '20095', 'Hafenweg 3'),
(3, 'Deutschland', 'München', '80331', 'Leopoldstraße 45'),
(4, 'Deutschland', 'Köln', '50667', 'Domstraße 8'),
(5, 'Deutschland', 'Frankfurt', '60311', 'Zeil 10'),
(6, 'Deutschland', 'Stuttgart', '70173', 'Schillerplatz 7'),
(7, 'Deutschland', 'Dresden', '01067', 'Altmarkt 1'),
(8, 'Deutschland', 'Leipzig', '04109', 'Augustusplatz 20'),
(9, 'Deutschland', 'Bremen', '28195', 'Marktplatz 5'),
(10, 'Deutschland', 'Düsseldorf', '40213', 'Königsallee 100');

-- anschrift (10 Einträge)
INSERT INTO public.anschrift (nachname, vorname, id) VALUES
('Müller', 'Anna', 1),
('Schmidt', 'Max', 2),
('Meier', 'Laura', 3),
('Fischer', 'Lukas', 4),
('Weber', 'Sophie', 5),
('Becker', 'Tim', 6),
('Hoffmann', 'Julia', 7),
('Klein', 'Paul', 8),
('Wolf', 'Lisa', 9),
('Neumann', 'Tom', 10);

-- benutzer (10 Einträge)
INSERT INTO public.benutzer (id, administrator, email, gesperrt, nachname, passwort, profilebild, spitzname, vorname, adresse_id) VALUES
(1, false, 'anna.mueller@example.com', false, 'Müller', 'pass123', NULL, 'Anni', 'Anna', 1),
(2, false, 'max.schmidt@example.com', false, 'Schmidt', 'pass234', NULL, 'Maxi', 'Max', 2),
(3, true, 'laura.meier@example.com', false, 'Meier', 'pass345', NULL, 'Lau', 'Laura', 3),
(4, false, 'lukas.fischer@example.com', false, 'Fischer', 'pass456', NULL, 'Luke', 'Lukas', 4),
(5, false, 'sophie.weber@example.com', false, 'Weber', 'pass567', NULL, 'Sophi', 'Sophie', 5),
(6, false, 'tim.becker@example.com', true, 'Becker', 'pass678', NULL, 'Timmy', 'Tim', 6),
(7, false, 'julia.hoffmann@example.com', false, 'Hoffmann', 'pass789', NULL, 'Jule', 'Julia', 7),
(8, false, 'paul.klein@example.com', false, 'Klein', 'pass890', NULL, 'Paule', 'Paul', 8),
(9, false, 'lisa.wolf@example.com', false, 'Wolf', 'pass901', NULL, 'Lisi', 'Lisa', 9),
(10, false, 'tom.neumann@example.com', false, 'Neumann', 'pass012', NULL, 'Tommy', 'Tom', 10);

-- benutzer_chats (10 Einträge)
INSERT INTO public.benutzer_chats (benutzer_id, chats_id) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 3),
(7, 4),
(8, 4),
(9, 5),
(10, 5);

-- benutzer_nachrichten (10 Einträge)
INSERT INTO public.benutzer_nachrichten (benutzer_id, nachrichten_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- benutzer_tickets (10 Einträge)
INSERT INTO public.benutzer_tickets (benutzer_id, tickets_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- buchungsformular (10 Einträge)
INSERT INTO public.buchungsformular (id, email, teilnehmeranzahl, rechnungsanschrift_id) VALUES
(1, 'anna.mueller@example.com', 2, 1),
(2, 'max.schmidt@example.com', 1, 2),
(3, 'laura.meier@example.com', 4, 3),
(4, 'lukas.fischer@example.com', 3, 4),
(5, 'sophie.weber@example.com', 2, 5),
(6, 'tim.becker@example.com', 1, 6),
(7, 'julia.hoffmann@example.com', 5, 7),
(8, 'paul.klein@example.com', 2, 8),
(9, 'lisa.wolf@example.com', 3, 9),
(10, 'tom.neumann@example.com', 1, 10);

-- chat (10 Einträge)
INSERT INTO public.chat (id, gruppenbild, "name") VALUES
(1, NULL, 'Gruppe Berlin'),
(2, NULL, 'Gruppe Hamburg'),
(3, NULL, 'Gruppe München'),
(4, NULL, 'Gruppe Köln'),
(5, NULL, 'Gruppe Frankfurt'),
(6, NULL, 'Gruppe Stuttgart'),
(7, NULL, 'Gruppe Dresden'),
(8, NULL, 'Gruppe Leipzig'),
(9, NULL, 'Gruppe Bremen'),
(10, NULL, 'Gruppe Düsseldorf');

-- chat_benutzer (10 Einträge)
INSERT INTO public.chat_benutzer (chat_id, benutzer_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- nachricht (10 Einträge)
INSERT INTO public.nachricht (dtype, id, datum, inhalt, chat_id) VALUES
('text', 1, '2025-07-15 10:00:00', 'Hallo aus Berlin!', 1),
('text', 2, '2025-07-15 10:05:00', 'Hallo aus Hamburg!', 2),
('text', 3, '2025-07-15 10:10:00', 'Hallo aus München!', 3),
('text', 4, '2025-07-15 10:15:00', 'Hallo aus Köln!', 4),
('text', 5, '2025-07-15 10:20:00', 'Hallo aus Frankfurt!', 5),
('text', 6, '2025-07-15 10:25:00', 'Hallo aus Stuttgart!', 6),
('text', 7, '2025-07-15 10:30:00', 'Hallo aus Dresden!', 7),
('text', 8, '2025-07-15 10:35:00', 'Hallo aus Leipzig!', 8),
('text', 9, '2025-07-15 10:40:00', 'Hallo aus Bremen!', 9),
('text', 10, '2025-07-15 10:45:00', 'Hallo aus Düsseldorf!', 10);

-- rechung (10 Einträge)
INSERT INTO public.rechung (id, ausstellungszeitpunkt, faelligkeitsdatum, pdf, rechnungsnummer, rechnungsanschrift_id, ticket_id, veranstalteranschrift_id) VALUES
(1, '2025-07-10', '2025-07-25', NULL, 'R-20250710-001', 1, 1, 1),
(2, '2025-07-11', '2025-07-26', NULL, 'R-20250711-002', 2, 2, 2),
(3, '2025-07-12', '2025-07-27', NULL, 'R-20250712-003', 3, 3, 3),
(4, '2025-07-13', '2025-07-28', NULL, 'R-20250713-004', 4, 4, 4),
(5, '2025-07-14', '2025-07-29', NULL, 'R-20250714-005', 5, 5, 5),
(6, '2025-07-15', '2025-07-30', NULL, 'R-20250715-006', 6, 6, 6),
(7, '2025-07-16', '2025-07-31', NULL, 'R-20250716-007', 7, 7, 7),
(8, '2025-07-17', '2025-08-01', NULL, 'R-20250717-008', 8, 8, 8),
(9, '2025-07-18', '2025-08-02', NULL, 'R-20250718-009', 9, 9, 9),
(10, '2025-07-19', '2025-08-03', NULL, 'R-20250719-010', 10, 10, 10);

-- ticket (10 Einträge)
INSERT INTO public.ticket (id, pruefwert, qe_code, teilnehmer_anzahl, rechung_id, veranstaltung_id) VALUES
(1, 'ABC123XYZ', NULL, 2, 1, 1),
(2, 'DEF456UVW', NULL, 1, 2, 2),
(3, 'GHI789RST', NULL, 4, 3, 3),
(4, 'JKL012MNO', NULL, 3, 4, 4),
(5, 'PQR345STU', NULL, 2, 5, 5),
(6, 'VWX678YZA', NULL, 1, 6, 6),
(7, 'BCD901EFG', NULL, 5, 7, 7),
(8, 'HIJ234KLM', NULL, 2, 8, 8),
(9, 'NOP567QRS', NULL, 3, 9, 9),
(10, 'TUV890WXY', NULL, 1, 10, 10);

-- ticket_benutzers (10 Einträge)
INSERT INTO public.ticket_benutzers (ticket_id, benutzers_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- umfrage_optionen (10 Einträge)
INSERT INTO public.umfrage_optionen (umfrage_id, optionen) VALUES
(1, 'Option A;Option B;Option C'),
(2, 'Ja;Nein'),
(3, 'Rot;Grün;Blau'),
(4, 'Früh;Mittel;Spät'),
(5, 'Kaffee;Tee;Wasser'),
(6, 'Online;Offline'),
(7, 'Einfach;Mittel;Schwer'),
(8, 'Anwesend;Abwesend'),
(9, 'Positiv;Neutral;Negativ'),
(10, 'Tag;Nacht');

-- veranstalter (10 Einträge)
INSERT INTO public.veranstalter (id, email, telefonnummer, veranstalter_name, adresse_id) VALUES
(1, 'kontakt1@veranstalter.de', '+49 30 111111', 'Event GmbH Berlin', 1),
(2, 'kontakt2@veranstalter.de', '+49 40 222222', 'Event GmbH Hamburg', 2),
(3, 'kontakt3@veranstalter.de', '+49 89 333333', 'Event GmbH München', 3),
(4, 'kontakt4@veranstalter.de', '+49 221 444444', 'Event GmbH Köln', 4),
(5, 'kontakt5@veranstalter.de', '+49 69 555555', 'Event GmbH Frankfurt', 5),
(6, 'kontakt6@veranstalter.de', '+49 711 666666', 'Event GmbH Stuttgart', 6),
(7, 'kontakt7@veranstalter.de', '+49 351 777777', 'Event GmbH Dresden', 7),
(8, 'kontakt8@veranstalter.de', '+49 341 888888', 'Event GmbH Leipzig', 8),
(9, 'kontakt9@veranstalter.de', '+49 421 999999', 'Event GmbH Bremen', 9),
(10, 'kontakt10@veranstalter.de', '+49 211 101010', 'Event GmbH Düsseldorf', 10);

-- veranstalter_ansprechpersonen (10 Einträge)
INSERT INTO public.veranstalter_ansprechpersonen (veranstalter_id, ansprechpersonen_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- veranstalter_mitglieder (10 Einträge)
INSERT INTO public.veranstalter_mitglieder (veranstalter_id, mitglieder_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- veranstaltung (10 Einträge)
INSERT INTO public.veranstaltung (id, beschreibung, status, veranstaltung_name, adresse_id, veranstalter_id) VALUES
(1, 'Sommerfest in Berlin', 'aktiv', 'Berlin Sommerfest', 1, 1),
(2, 'Musikfestival in Hamburg', 'aktiv', 'Hamburg Beats', 2, 2),
(3, 'Kunstmesse in München', 'aktiv', 'München Art', 3, 3),
(4, 'Theater in Köln', 'aktiv', 'Kölner Bühne', 4, 4),
(5, 'Businesskonferenz in Frankfurt', 'aktiv', 'Frankfurt Business', 5, 5),
(6, 'Sportevent in Stuttgart', 'aktiv', 'Stuttgart Run', 6, 6),
(7, 'Weinfest in Dresden', 'aktiv', 'Dresden Weinfest', 7, 7),
(8, 'Tech-Meetup in Leipzig', 'aktiv', 'Leipzig Tech', 8, 8),
(9, 'Bierfestival in Bremen', 'aktiv', 'Bremen Bierfest', 9, 9),
(10, 'Karneval in Düsseldorf', 'aktiv', 'Düsseldorf Karneval', 10, 10);

-- veranstaltung_benutzer (10 Einträge)
INSERT INTO public.veranstaltung_benutzer (veranstaltung_id, benutzer_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);
