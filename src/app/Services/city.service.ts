import { Injectable } from '@angular/core';
import { status_list } from '../utils/statusList';
import { HttpClient } from '@angular/common/http';
import { actions } from '../utils/actions';
import { apiEndPoints, cityUrl } from '../utils/api-endpoints';
import { Observable } from 'rxjs';
import { CityResponse } from '../Interfaces/city.interface';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  cityUrl = cityUrl
  constructor(private http: HttpClient) {}
  handleCity(formData:any, action?:string):Observable<CityResponse>{
      let endPoint = apiEndPoints.findCity
      let payLoad = formData;
      if(action === actions.add) 
        {
          endPoint = apiEndPoints.addCity
        }
      else if(action === actions.edit) 
      {
        endPoint = apiEndPoints.updateCity
        payLoad = {...formData, cityId: formData.cityId}
      }
      else if(action === actions.delete) {
        endPoint = apiEndPoints.deleteCity
        payLoad = {cityId: formData.cityId}
      }
      return this.http.post<CityResponse>(`${this.cityUrl}${endPoint}`, payLoad)
  }
}