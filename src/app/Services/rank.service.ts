import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actions } from '../utils/actions';
import { rankUrl, rankTypeUrl, apiEndPoints } from '../utils/api-endpoints'

@Injectable({
  providedIn: 'root',
})
export class RankService {
  rankUrl = rankUrl;
  rankTypeUrl = rankTypeUrl;
  requestBody = {
    username: 'sikandar.waheed',
    data: [{}],
  };

  constructor(private http: HttpClient) {}

  handleRank(rankData?: any, action?: any): Observable<any> {
    let endPoint = apiEndPoints.findRanks;
    let payload = rankData;
    
    if (action === actions.add) {
      endPoint = apiEndPoints.addRank;
    } else if (action === actions.edit) {
      endPoint = apiEndPoints.updateRank;
      payload = { ...rankData, rankId: rankData.rankId };
    } else if (action === actions.delete) {
      endPoint = apiEndPoints.deleteRank;
      payload = { rankId: rankData.rankId };
    }

    return this.http.post(`${rankUrl}${endPoint}`, payload);
  }

  getRanksType() {
    return this.http.post<any>(`${this.rankTypeUrl}`, this.requestBody);
  }

}