import { bootstrapApplication } from '@angular/platform-browser';

import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import {importProvidersFrom} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ],
});
