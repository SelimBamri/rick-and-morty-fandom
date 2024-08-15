import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<Character[]> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
      map((r) =>
        r.results.map((char: any) => ({
          id: char.id,
          numberOfEpisodes: char.episode.length,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin.name,
          location: char.location.name,
          image: char.image,
        }))
      )
    );
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map((char: any) => ({
        id: char.id,
        numberOfEpisodes: char.episode.length,
        name: char.name,
        status: char.status,
        species: char.species,
        gender: char.gender,
        origin: char.origin.name,
        location: char.location.name,
        image: char.image,
      }))
    );
  }
}
