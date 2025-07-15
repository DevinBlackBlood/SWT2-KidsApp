INSERT INTO public.adresse (id, land, ort, plz, strasse) VALUES
(1, 'Deutschland', 'Berlin', '10115', 'Musterstraße 1'),
(2, 'Deutschland', 'München', '80331', 'Hauptstraße 5'),
(3, 'Deutschland', 'Hamburg', '20095', 'Allee 10'),
(4, 'Deutschland', 'Köln', '50667', 'Domstraße 3'),
(5, 'Deutschland', 'Frankfurt', '60311', 'Zeil 20'),
(6, 'Deutschland', 'Stuttgart', '70173', 'Schlossplatz 7'),
(7, 'Deutschland', 'Dresden', '01067', 'Altmarkt 1'),
(8, 'Deutschland', 'Leipzig', '04109', 'Markt 4'),
(9, 'Deutschland', 'Hannover', '30159', 'Georgstraße 12'),
(10, 'Deutschland', 'Düsseldorf', '40213', 'Königsallee 1');

INSERT INTO public.benutzer (id, administrator, email, gesperrt, nachname, passwort, profilebild, spitzname, vorname, adresse_id) VALUES
(1, false, 'max1@example.com', false, 'Mustermann', 'pw1', NULL, 'Maxi', 'Max', 1),
(2, true, 'sara2@example.com', false, 'Meier', 'pw2', NULL, 'Sari', 'Sara', 2),
(3, false, 'tom3@example.com', false, 'Schmidt', 'pw3', NULL, 'Tommy', 'Tom', 3),
(4, false, 'lara4@example.com', false, 'Fischer', 'pw4', NULL, 'Lari', 'Lara', 4),
(5, true, 'peter5@example.com', false, 'Müller', 'pw5', NULL, 'Pete', 'Peter', 5),
(6, false, 'julia6@example.com', false, 'Schneider', 'pw6', NULL, 'Jule', 'Julia', 6),
(7, false, 'luca7@example.com', true, 'Weber', 'pw7', NULL, 'Luki', 'Luca', 7),
(8, false, 'anna8@example.com', false, 'Hoffmann', 'pw8', NULL, 'Anni', 'Anna', 8),
(9, false, 'leo9@example.com', false, 'Koch', 'pw9', NULL, 'Leo', 'Leon', 9),
(10, true, 'nina10@example.com', false, 'Richter', 'pw10', NULL, 'Nini', 'Nina', 10);

INSERT INTO public.veranstalter (id, email, telefonnummer, veranstalter_name, adresse_id) VALUES
(1, 'kontakt1@veranstalter.de', '0301234561', 'Event GmbH 1', 1),
(2, 'kontakt2@veranstalter.de', '0301234562', 'Event GmbH 2', 2),
(3, 'kontakt3@veranstalter.de', '0301234563', 'Event GmbH 3', 3),
(4, 'kontakt4@veranstalter.de', '0301234564', 'Event GmbH 4', 4),
(5, 'kontakt5@veranstalter.de', '0301234565', 'Event GmbH 5', 5),
(6, 'kontakt6@veranstalter.de', '0301234566', 'Event GmbH 6', 6),
(7, 'kontakt7@veranstalter.de', '0301234567', 'Event GmbH 7', 7),
(8, 'kontakt8@veranstalter.de', '0301234568', 'Event GmbH 8', 8),
(9, 'kontakt9@veranstalter.de', '0301234569', 'Event GmbH 9', 9),
(10, 'kontakt10@veranstalter.de', '0301234570', 'Event GmbH 10', 10);

INSERT INTO public.veranstaltung (id, beschreibung, status, veranstaltung_name, adresse_id, veranstalter_id) VALUES
(1, 'Sommerfest', 'geplant', 'Sommerfest 2025', 1, 1),
(2, 'Tech-Konferenz', 'aktiv', 'TechDays 2025', 2, 1),
(3, 'Food-Festival', 'abgeschlossen', 'Foodie Days', 3, 1),
(4, 'Musiknacht', 'geplant', 'Night of Music', 4, 2),
(5, 'Kunstmesse', 'aktiv', 'Art Expo', 5, 2),
(6, 'Startup-Pitch', 'geplant', 'Pitch Night', 6, 3),
(7, 'Marathon', 'abgeschlossen', 'City Run', 7, 3),
(8, 'Buchmesse', 'aktiv', 'Book World', 8, 4),
(9, 'Umweltkongress', 'geplant', 'Green Future', 9, 4),
(10, 'Filmfestival', 'aktiv', 'CineVision', 10, 5);

INSERT INTO public.chat (id, gruppenbild, "name") VALUES
(1, NULL, 'Allgemein'),
(2, NULL, 'Projekt A'),
(3, NULL, 'Organisation'),
(4, NULL, 'Privat'),
(5, NULL, 'Event-Gruppe'),
(6, NULL, 'Musik-Fans'),
(7, NULL, 'Buchclub'),
(8, NULL, 'TechTalk'),
(9, NULL, 'Gaming-Gruppe'),
(10, NULL, 'Foto-Freunde');

INSERT INTO public.nachricht (dtype, id, datum, inhalt, chat_id) VALUES
('Text', 1, '2025-07-01 08:00:00', 'Guten Morgen!', 1),
('Text', 2, '2025-07-01 09:15:00', 'Projekt gestartet.', 2),
('Text', 3, '2025-07-01 10:45:00', 'Wie ist der Stand?', 3),
('Text', 4, '2025-07-01 11:00:00', 'Bin später da.', 4),
('Text', 5, '2025-07-01 13:00:00', 'Ort geändert?', 5),
('Text', 6, '2025-07-01 14:30:00', 'Playlist teilen?', 6),
('Text', 7, '2025-07-01 15:00:00', 'Neues Buch entdeckt!', 7),
('Text', 8, '2025-07-01 16:10:00', 'Schaut euch das an!', 8),
('Text', 9, '2025-07-01 17:25:00', 'GG!', 9),
('Text', 10, '2025-07-01 18:40:00', 'Tolles Bild!', 10);

INSERT INTO public.anschrift (nachname, vorname, id) VALUES
('Mustermann', 'Max', 1),
('Meier', 'Sara', 2),
('Schmidt', 'Tom', 3),
('Fischer', 'Lara', 4),
('Müller', 'Peter', 5),
('Schneider', 'Julia', 6),
('Weber', 'Luca', 7),
('Hoffmann', 'Anna', 8),
('Koch', 'Leon', 9),
('Richter', 'Nina', 10);


ALTER TABLE ticket DISABLE TRIGGER ALL;
ALTER TABLE rechnung DISABLE TRIGGER ALL;

INSERT INTO public.rechnung
(id, ausstellungszeitpunkt, faelligkeitsdatum, pdf, rechnungsnummer, rechnungsanschrift_id, ticket_id, veranstalteranschrift_id) VALUES
(1, '08:30:00', '2025-07-31', NULL, 1001, 1, 1, 1),
(2, '09:15:00', '2025-08-01', NULL, 1002, 2, 2, 2),
(3, '10:45:00', '2025-08-02', NULL, 1003, 3, 3, 3),
(4, '11:00:00', '2025-08-03', NULL, 1004, 4, 4, 4),
(5, '13:00:00', '2025-08-04', NULL, 1005, 5, 5, 5),
(6, '14:30:00', '2025-08-05', NULL, 1006, 6, 6, 6),
(7, '15:00:00', '2025-08-06', NULL, 1007, 7, 7, 7),
(8, '16:10:00', '2025-08-07', NULL, 1008, 8, 8, 8),
(9, '17:25:00', '2025-08-08', NULL, 1009, 9, 9, 9),
(10, '18:40:00', '2025-08-09', NULL, 1010, 10, 10, 10);


INSERT INTO public.ticket (id, pruefwert, qe_code, teilnehmer_anzahl, rechung_id, veranstaltung_id) VALUES
(1, 'ABC1', NULL, 2, 1, 1),
(2, 'ABC2', NULL, 1, 2, 2),
(3, 'ABC3', NULL, 3, 3, 3),
(4, 'ABC4', NULL, 2, 4, 4),
(5, 'ABC5', NULL, 4, 5, 5),
(6, 'ABC6', NULL, 2, 6, 6),
(7, 'ABC7', NULL, 1, 7, 7),
(8, 'ABC8', NULL, 5, 8, 8),
(9, 'ABC9', NULL, 2, 9, 9),
(10, 'ABC10', NULL, 3, 10, 10);

ALTER TABLE ticket ENABLE TRIGGER ALL;
ALTER TABLE rechnung ENABLE TRIGGER ALL;

INSERT INTO public.umfrage_optionen (umfrage_id, optionen) VALUES
(1, 'Option A'),
(2, 'Option B'),
(3, 'Option C'),
(4, 'Option D'),
(5, 'Option E'),
(6, 'Option F'),
(7, 'Option G'),
(8, 'Option H'),
(9, 'Option I'),
(10, 'Option J');

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