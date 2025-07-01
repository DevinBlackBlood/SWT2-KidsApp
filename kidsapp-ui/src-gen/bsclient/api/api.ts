export * from './benutzerController.service';
import { BenutzerControllerService } from './benutzerController.service';
export * from './veranstaltungController.service';
import { VeranstaltungControllerService } from './veranstaltungController.service';
export const APIS = [BenutzerControllerService, VeranstaltungControllerService];
