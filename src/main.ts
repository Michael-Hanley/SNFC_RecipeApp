import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from './environment';
import { APP_ROUTER_PROVIDERS } from './router.component/app.routes';
import { HTTP_PROVIDERS } from "@angular/http";
import { ShoppingListService } from "./services/shopping-list.service";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, ShoppingListService]);

