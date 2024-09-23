import { Injectable } from '@angular/core';
import { status_list } from '../utils/statusList';

@Injectable({
  providedIn: 'root',
})
export class CityService {

  constructor() {}
  
  cityData = [
    {
      cityName: 'Rawalpindi',
      timeZone: 'GMT+5',
      countryName: 'Pakistan',
      description: 'CSD HPBC ONLINE SHOP RAWALPIND',
      inventoryStatus: 'Draft',
    },
    {
      cityName: 'Rawalpindi',
      timeZone: 'GMT+5',
      countryName: 'Pakistan',
      description: 'CSD HPBC ONLINE SHOP RAWALPIND',
      inventoryStatus: 'Active',
    },
    {
      cityName: 'Islamabad',
      timeZone: 'GMT+5',
      countryName: 'Pakistan',
      description: 'CSD HPBC ONLINE SHOP Islamabad',
      inventoryStatus: 'Inactive',
    },
    {
      cityName: 'Islamabad',
      timeZone: 'GMT+5',
      countryName: 'Pakistan',
      description: 'CSD HPBC ONLINE SHOP Islamabad',
      inventoryStatus: 'Suspended',
    },
    {
      cityName: 'Peshawar',
      timeZone: 'GMT+6',
      countryName: 'Pakistan 2',
      description: 'CSD HPBC ONLINE SHOP Peshawar',
      inventoryStatus: 'Active',
    },
  ];

  // Method to map the cityData and include the severity
  getCityWithSeverity() {
    return this.cityData.map((city) => {
      const status = status_list.find(
        (s) => s.name === city.inventoryStatus
      );
      return {
        ...city,
        severity: status?.severity || '', // Assign severity or empty string if not found
      };
    });
  }

}
