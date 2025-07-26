import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { loadingInterceptor } from './interceptors/loading.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes, withHashLocation(),
    withInMemoryScrolling({scrollPositionRestoration: 'top'}),

  ),
   provideHttpClient(
      withInterceptors([loadingInterceptor]) 
    ),
importProvidersFrom(NgxSpinnerModule)

],

};
