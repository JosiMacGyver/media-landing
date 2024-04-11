import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../../housinglocation';
import { HousingService } from '../../../housing.service';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  
    console.log('Filtered results:', this.filteredLocationList);
  }
  
}
