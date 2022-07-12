import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

import { Area } from '../model/area'
import { Thing } from '../model/thing'

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  things: Thing[] = []

  constructor(private http: HttpClient) { }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('assets/data/areas.json')
  }

  getThings(id: number): Observable<Thing[]> {
    return this.http.get<Thing[]>('assets/data/things.json')
    .pipe((map(response => {
      response = response.filter(data => data.areaId === id)
      return response
    })))
  }

  getThingsById(id: number) {
    return this.things.filter(data => data.areaId === id)
  }
}
