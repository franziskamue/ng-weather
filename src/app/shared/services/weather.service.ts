import {inject, Injectable, Signal, signal} from '@angular/core';
import {Observable, of} from 'rxjs';
import { tap } from "rxjs/operators";

import {HttpClient} from '@angular/common/http';
import {CurrentConditions} from '../types/current-conditions.type';
import {Forecast} from '../../components/forecasts-list/forecast.type';
import {StorageService} from "./storage.service";
import {ConditionsAndZip} from "../types/conditions-and-zip.type";

@Injectable()
export class WeatherService {

  private storageService = inject(StorageService);

  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  static FORECAST_KEY = 'forecast-';
  static CONDITIONS_KEY = 'conditions-';

  private currentConditions = signal<ConditionsAndZip[]>([]);

  constructor(private http: HttpClient) { }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  addCurrentConditions(zipcode: string): void {
    const key = WeatherService.CONDITIONS_KEY + zipcode;
    const conditionInStorage = this.storageService.getDataFromLocalStorage(key, true);
    if(conditionInStorage) {
      const conditionAndZipFromStorage = <CurrentConditions> JSON.parse(conditionInStorage);
      this.updateCurrentConditions(zipcode, conditionAndZipFromStorage);
    } else {
      this.http.get<CurrentConditions>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`)
          .subscribe((result) => {
            this.storageService.saveDataInLocalStorageWithTimestamp(key, result);
            this.updateCurrentConditions(zipcode, result);
          })
    }
  }

  private updateCurrentConditions(zip: string, currentConditions: CurrentConditions) {
    this.currentConditions.update((existingConditions) => [...existingConditions, { zip: zip, data: currentConditions }]);
  }

  loadCurrentConditionsForLocations(locations: string[]) {
    // reset current conditions
    this.currentConditions.set([]);

    locations.forEach(location => {
      this.addCurrentConditions(location);
    })
  }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    const key = WeatherService.FORECAST_KEY + zipcode;
    const conditionInStorage = this.storageService.getDataFromLocalStorage(key, true);
    if(conditionInStorage) {
      const parsedData = <Forecast> JSON.parse(conditionInStorage);
      return of(parsedData);
    } else {
      return this.http.get<Forecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`)
          .pipe(tap((data) => this.storageService.saveDataInLocalStorageWithTimestamp(key, data)));
    }
  }

  getWeatherIcon(id): string {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + "art_storm.png";
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + "art_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + "art_light_rain.png";
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + "art_snow.png";
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + "art_clouds.png";
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + "art_fog.png";
    else
      return WeatherService.ICON_URL + "art_clear.png";
  }

}
