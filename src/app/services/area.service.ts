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
  areaIdArr: any = []
  finalA: any = []


  constructor(private http: HttpClient) { }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('assets/data/areas.json')
  }

  getThings(id: number): Observable<Thing[]> {
    return this.http.get<Thing[]>('assets/data/things.json')
    .pipe((map(response => {
      this.finalA = []
      this.areaIdArr = []
      response = response.filter(data => data.areaId === id)

      this.things = response

      this.things.sort((a, b) => a.joinedWith - b.joinedWith)

      this.things.forEach(a => {
        this.areaIdArr.push(a.joinedWith)
      })
      this.areaIdArr = [...new Set(this.areaIdArr)]

      this.areaIdArr.forEach((t: any) => {
          let s:any = []

        this.things.forEach(a => {
          if (t === a.joinedWith) {
            s.push(a)                
          }
        })
        let obj = {
          objects: s
        }
        this.finalA.push(obj)
      })
      return this.finalA
    })))
  }
}
