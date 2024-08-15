import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}
  getEpisodes(page: number = 1): Observable<Episode[]> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
      map((r) =>
        r.results.map((char: any) => ({
          id: char.id,
          numberOfCharacters: char.characters.length,
          name: char.name,
          airDate: new Date(char.air_date),
          season: parseInt(char.episode[2]),
          episodeNumber: parseInt(char.episode.substr(4, 2)),
        }))
      )
    );
  }
}
