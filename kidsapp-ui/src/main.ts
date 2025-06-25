import { bootstrapApplication } from '@angular/platform-browser';
 
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { App} from './app/app';

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
