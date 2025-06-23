-- Benutzer
INSERT INTO public.benutzer (administrator, gesperrt, id, email, land, nachname, ort, passwort, plz, spitzname, strasse, vorname, profilebild) VALUES
(false, false, 1, 'user1@example.com', 'Deutschland', 'Nachname1', 'Ort1', 'pw1', '10001', 'Spitz1', 'Straße 1', 'Vorname1', null),
(false, false, 2, 'user2@example.com', 'Deutschland', 'Nachname2', 'Ort2', 'pw2', '10002', 'Spitz2', 'Straße 2', 'Vorname2', null),
(false, false, 3, 'user3@example.com', 'Deutschland', 'Nachname3', 'Ort3', 'pw3', '10003', 'Spitz3', 'Straße 3', 'Vorname3', null),
(false, false, 4, 'user4@example.com', 'Deutschland', 'Nachname4', 'Ort4', 'pw4', '10004', 'Spitz4', 'Straße 4', 'Vorname4', null),
(false, false, 5, 'user5@example.com', 'Deutschland', 'Nachname5', 'Ort5', 'pw5', '10005', 'Spitz5', 'Straße 5', 'Vorname5', null),
(false, false, 6, 'user6@example.com', 'Deutschland', 'Nachname6', 'Ort6', 'pw6', '10006', 'Spitz6', 'Straße 6', 'Vorname6', null),
(false, false, 7, 'user7@example.com', 'Deutschland', 'Nachname7', 'Ort7', 'pw7', '10007', 'Spitz7', 'Straße 7', 'Vorname7', null),
(false, false, 8, 'user8@example.com', 'Deutschland', 'Nachname8', 'Ort8', 'pw8', '10008', 'Spitz8', 'Straße 8', 'Vorname8', null),
(false, false, 9, 'user9@example.com', 'Deutschland', 'Nachname9', 'Ort9', 'pw9', '10009', 'Spitz9', 'Straße 9', 'Vorname9', null),
(false, false, 10, 'user10@example.com', 'Deutschland', 'Nachname10', 'Ort10', 'pw10', '100010', 'Spitz10', 'Straße 10', 'Vorname10', null);

-- Veranstalter
INSERT INTO public.veranstalter (id, email, land, ort, plz, strasse, telefonnummer, veranstalter_name) VALUES
(1,'kontakt1@event.at','Deutschland','Ort1','10001','Straße 1','+49123456781','Veranstalter1'),
(2,'kontakt2@event.at','Deutschland','Ort2','10002','Straße 2','+49123456782','Veranstalter2'),
(3,'kontakt3@event.at','Deutschland','Ort3','10003','Straße 3','+49123456783','Veranstalter3'),
(4,'kontakt4@event.at','Deutschland','Ort4','10004','Straße 4','+49123456784','Veranstalter4'),
(5,'kontakt5@event.at','Deutschland','Ort5','10005','Straße 5','+49123456785','Veranstalter5'),
(6,'kontakt6@event.at','Deutschland','Ort6','10006','Straße 6','+49123456786','Veranstalter6'),
(7,'kontakt7@event.at','Deutschland','Ort7','10007','Straße 7','+49123456787','Veranstalter7'),
(8,'kontakt8@event.at','Deutschland','Ort8','10008','Straße 8','+49123456788','Veranstalter8'),
(9,'kontakt9@event.at','Deutschland','Ort9','10009','Straße 9','+49123456789','Veranstalter9'),
(10,'kontakt10@event.at','Deutschland','Ort10','100010','Straße 10','+491234567810','Veranstalter10');

-- Veranstaltung
INSERT INTO public.veranstaltung (id, beschreibung, land, ort, plz, strasse, veranstaltung_name) VALUES
(1, 'Beschreibung1', 'Deutschland', 'Ort1', '10001', 'Straße 1', 'Event1'),
(2, 'Beschreibung2', 'Deutschland', 'Ort2', '10002', 'Straße 2', 'Event2'),
(3, 'Beschreibung3', 'Deutschland', 'Ort3', '10003', 'Straße 3', 'Event3'),
(4, 'Beschreibung4', 'Deutschland', 'Ort4', '10004', 'Straße 4', 'Event4'),
(5, 'Beschreibung5', 'Deutschland', 'Ort5', '10005', 'Straße 5', 'Event5'),
(6, 'Beschreibung6', 'Deutschland', 'Ort6', '10006', 'Straße 6', 'Event6'),
(7, 'Beschreibung7', 'Deutschland', 'Ort7', '10007', 'Straße 7', 'Event7'),
(8, 'Beschreibung8', 'Deutschland', 'Ort8', '10008', 'Straße 8', 'Event8'),
(9, 'Beschreibung9', 'Deutschland', 'Ort9', '10009', 'Straße 9', 'Event9'),
(10, 'Beschreibung10', 'Deutschland', 'Ort10', '100010', 'Straße 10', 'Event10');

-- Rechnung
INSERT INTO public.rechung (ausstellungszeitpunkt, faelligkeitsdatum, rechnungsnummer, id, ticket_id, veranstalteranschrift, vorname, pdf) VALUES
('09:00:00', '2025-06-30', 1001, 1, null, 'Straße 1, Ort1', 'Vorname1', null),
('09:00:00', '2025-07-01', 1002, 2, null, 'Straße 2, Ort2', 'Vorname2', null),
('09:00:00', '2025-07-02', 1003, 3, null, 'Straße 3, Ort3', 'Vorname3', null),
('09:00:00', '2025-07-03', 1004, 4, null, 'Straße 4, Ort4', 'Vorname4', null),
('09:00:00', '2025-07-04', 1005, 5, null, 'Straße 5, Ort5', 'Vorname5', null),
('09:00:00', '2025-07-05', 1006, 6, null, 'Straße 6, Ort6', 'Vorname6', null),
('09:00:00', '2025-07-06', 1007, 7, null, 'Straße 7, Ort7', 'Vorname7', null),
('09:00:00', '2025-07-07', 1008, 8, null, 'Straße 8, Ort8', 'Vorname8', null),
('09:00:00', '2025-07-08', 1009, 9, null, 'Straße 9, Ort9', 'Vorname9', null),
('09:00:00', '2025-07-09', 1010, 10, null, 'Straße 10, Ort10', 'Vorname10', null);
 
-- Ticket
INSERT INTO public.ticket (teilnehmer_anzahl, veranstaltung_id, id, rechung_id, pruefwert, qe_code) VALUES
(11, 1, 1, 1, 'CHK1', null),
(12, 2, 2, 2, 'CHK2', null),
(13, 3, 3, 3, 'CHK3', null),
(14, 4, 4, 4, 'CHK4', null),
(15, 5, 5, 5, 'CHK5', null),
(16, 6, 6, 6, 'CHK6', null),
(17, 7, 7, 7, 'CHK7', null),
(18, 8, 8, 8, 'CHK8', null),
(19, 9, 9, 9, 'CHK9', null),
(20, 10, 10, 10, 'CHK10', null);

-- Benutzer-Tickets
INSERT INTO public.benutzer_tickets (benutzer_id, tickets_id) VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10);

-- Ticket-Benutzers
INSERT INTO public.ticket_benutzers (benutzers_id, ticket_id) VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10);

-- Veranstaltung-Benutzer
INSERT INTO public.veranstaltung_benutzer (veranstaltung_id, benutzer_id) VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10);

-- Chat
INSERT INTO public.chat (id, "name", gruppenbild) VALUES
(1, 'Chat1', null),(2, 'Chat2', null),(3, 'Chat3', null),(4, 'Chat4', null),(5, 'Chat5', null),
(6, 'Chat6', null),(7, 'Chat7', null),(8, 'Chat8', null),(9, 'Chat9', null),(10, 'Chat10', null);

-- Nachricht
INSERT INTO public.nachricht (id, chat_id, datum, inhalt) VALUES
(1, 1, '2025-06-20', 'Nachricht 1'),(2, 2, '2025-06-20', 'Nachricht 2'),(3, 3, '2025-06-20', 'Nachricht 3'),
(4, 4, '2025-06-20', 'Nachricht 4'),(5, 5, '2025-06-20', 'Nachricht 5'),(6, 6, '2025-06-20', 'Nachricht 6'),
(7, 7, '2025-06-20', 'Nachricht 7'),(8, 8, '2025-06-20', 'Nachricht 8'),(9, 9, '2025-06-20', 'Nachricht 9'),
(10, 10, '2025-06-20', 'Nachricht 10');

-- Benutzer-Nachrichten
INSERT INTO public.benutzer_nachrichten (nachrichten_id, benutzer_id) VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10);

-- Buchungsformular
INSERT INTO public.buchungsformular (teilnehmeranzahl, id, email, vorname) VALUES
(2,1,'user1@example.com','Vorname1'),(2,2,'user2@example.com','Vorname2'),(2,3,'user3@example.com','Vorname3'),
(2,4,'user4@example.com','Vorname4'),(2,5,'user5@example.com','Vorname5'),(2,6,'user6@example.com','Vorname6'),
(2,7,'user7@example.com','Vorname7'),(2,8,'user8@example.com','Vorname8'),(2,9,'user9@example.com','Vorname9'),
(2,10,'user10@example.com','Vorname10');

-- Umfrage
INSERT INTO public.umfrage (id) VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10);

-- Umfrage Optionen
INSERT INTO public.umfrage_optionen (umfrage_id, optionen) VALUES
(1,'Option1'),(2,'Option2'),(3,'Option3'),(4,'Option4'),(5,'Option5'),
(6,'Option6'),(7,'Option7'),(8,'Option8'),(9,'Option9'),(10,'Option10');

-- Veranstalter Ansprechpersonen
INSERT INTO public.veranstalter_ansprechpersonen (ansprechpersonen_id, veranstalter_id) VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10);

-- Veranstalter Mitglieder
INSERT INTO public.veranstalter_mitglieder (mitglieder_id, veranstalter_id) VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10);
