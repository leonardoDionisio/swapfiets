import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { GeneralInterceptor } from './interceptors/general.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(
            withInterceptors([GeneralInterceptor, ErrorInterceptor])
        ),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withComponentInputBinding()),
        provideAnimations()
    ]
};
