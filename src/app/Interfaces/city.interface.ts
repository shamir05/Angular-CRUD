// city.model.ts
export interface City {
    cityName: string;
    timeZone: string;
    description: string;
    country: string;
    status: number;
    _id: string;
    createdBy: number;
    cityId: number;
  }
  
  export interface CityResponse {
    message: string;
    cities: City[];
  }
  