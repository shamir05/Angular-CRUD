import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { actions } from '../utils/actions';
@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  organizationnUrl = 'http://192.168.2.223:3001/hp/Organization';
  orgTypeUrl = 'http://192.168.2.223:3001/hp/OrganizationType/findallOrganizationType';
  requestBody = {
    username: 'sikandar.waheed',
    data: [{}],
  };

  constructor(private http: HttpClient) {}

  // Add Organization to database
  handleOrganization(action: any, orgdata: any) {
    let endPoint = '/addOrganization';
    if (action === actions.edit) endPoint = '/updateOrganization';
    else if (action === actions.delete) endPoint = '/deleteOrganization';
    return this.http.post(`${this.organizationnUrl}${endPoint}`, orgdata);
  }

  // Get all organizations from database
  getOrganizations() {
    return this.http.post<any>(
      `${this.organizationnUrl}/findallOrganization`,
      this.requestBody
    );
  }

  //Get All Organizations type
  getOrganizationTypes() {
    return this.http.post<any>(`${this.orgTypeUrl}`, this.requestBody);
  }
}
