import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = 'https://rickandmortyapi.com/api/location';
  constructor(private http: HttpClient) {}
  getLocations(page: number = 1): Observable<Location[]> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
      map((r) =>
        r.results.map((char: any) => ({
          id: char.id,
          numberOfResidents: char.residents.length,
          name: char.name,
          type: char.type,
          dimension: char.dimension,
        }))
      )
    );
  }
}
