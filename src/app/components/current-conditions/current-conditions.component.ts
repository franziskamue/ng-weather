import {
  Component,
  computed,
  effect,
  inject,
  Signal,
} from '@angular/core';
import {TabContent} from "../../shared/types/tab-content.type";
import {LocationService} from "../../shared/services/location.service";
import {WeatherService} from "../../shared/services/weather.service";
import {ConditionsAndZip} from "../../shared/types/conditions-and-zip.type";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  protected locationService = inject(LocationService);
  protected weatherService = inject(WeatherService);

  // Signal to store the array of ConditionsAndZip objects
  protected currentConditionsForLocations: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  // compute the tabs from the currentConditionsForLocations
  tabContents: Signal<TabContent[]> = computed(() => {
    return this.currentConditionsForLocations().map(conditionAndZip => {
      return {
        tabName: `${conditionAndZip.data.name} (${conditionAndZip.zip})`,
        tabIdentifier: conditionAndZip.zip
      }
    })
  })

  constructor() {
    effect(() => {
      const locations = this.locationService.getLocations();
      this.weatherService.loadCurrentConditionsForLocations(locations());
    }, {allowSignalWrites: true});
  }

  removeWeatherTab(index: number) {
    this.locationService.removeLocation(this.tabContents()[index].tabIdentifier);
  }
}
