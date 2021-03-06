// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }         from './app.component';
import { appRouterProviders }   from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS    // in-mem server data
]);
