import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode';
import { EpisodeService } from '../services/episode.service';
import { Observable } from 'rxjs';
import { NgIf, NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { EpisodeCardComponent } from '../episode-card/episode-card.component';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [NgFor, NgIf, EpisodeCardComponent, MatPaginatorModule, AsyncPipe],
  templateUrl: './episodes-list.component.html',
  styleUrl: './episodes-list.component.scss',
})
export class EpisodesListComponent {
  totalItems = 51;
  pageSize = 20;
  currentPage = 0;
  episodes$!: Observable<Episode[]>;
  constructor(private episodeService: EpisodeService) {}
  ngOnInit(): void {
    this.episodes$ = this.episodeService.getEpisodes(this.currentPage + 1);
  }
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.episodes$ = this.episodeService.getEpisodes(this.currentPage + 1);
  }
}
