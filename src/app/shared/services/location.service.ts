import {inject, Injectable, signal} from '@angular/core';
import {StorageService} from "./storage.service";

export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {
  private storageService = inject(StorageService);
  locations = signal<string[]>([]);

  constructor() {
    let locString = this.storageService.getDataFromLocalStorage(LOCATIONS);
    if (locString) {
      this.locations.update(() => JSON.parse(locString));
    }
  }

  getLocations() {
    return this.locations.asReadonly();
  }

  addLocation(zipCode: string) {
    this.locations.update(values => [...values, zipCode]);
    this.storageService.saveDataInLocalStorage(LOCATIONS, this.locations())
  }

  removeLocation(zipCode: string) {
    this.locations.update(values => values.filter(loc => loc !== zipCode));
    this.storageService.saveDataInLocalStorage(LOCATIONS, this.locations())
  }
}
