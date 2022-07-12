import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Area } from '../model/area'
import { Thing } from '../model/thing'

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('assets/data/areas.json')
  }

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>('assets/data/things.json')
  }
}
