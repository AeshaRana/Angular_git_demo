import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';


// import Nora from '@primeng/themes/nora';

export const appConfig: ApplicationConfig = {
  providers: [
     provideRouter(routes),
     providePrimeNG({
      ripple:true,
      theme: {
        preset: Lara
        // preset:Nora
      }
    }),
    provideBrowserGlobalErrorListeners(),
  ]
};
