/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';

import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import {importProvidersFrom, isDevMode} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ],
});
