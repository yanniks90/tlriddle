import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideRouter, Router} from '@angular/router';

import {DEV_PAGE, routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from "@angular/common/http";

export function appInitializer(router: Router) {
  return () => {
    const lastVisitedRoute = localStorage.getItem('lastPath');
    const splitArr = window.location.href.split('/');
    const calledUrl = splitArr[splitArr.length -1];
    if (lastVisitedRoute && calledUrl !=  DEV_PAGE) {
      router.navigateByUrl(lastVisitedRoute);
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [Router]
    },
    provideHttpClient(withFetch())
  ]
};
