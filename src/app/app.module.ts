import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';
import {LocationService} from "./shared/services/location.service";
import { ForecastsListComponent } from './components/forecasts-list/forecasts-list.component';
import {WeatherService} from "./shared/services/weather.service";
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {TabsGroupComponent} from "./shared/components/tabs-group/tabs-group.component";
import {StorageService} from "./shared/services/storage.service";

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    ForecastsListComponent,
    CurrentConditionsComponent,
    MainPageComponent,
    TabsGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [LocationService, WeatherService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }