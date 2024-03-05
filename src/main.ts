import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, HttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { InputServiesService } from './app/Services/input-servies.service';
import { InputsComponent } from './app/Components/inputs/inputs.component';
import { TableComponent } from './app/Components/table/table.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(InputsComponent, TableComponent, InputServiesService),
    provideHttpClient(withInterceptorsFromDi()),    
    provideAnimationsAsync(),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'})  
  ]})
  .catch((err) => console.error(err));
