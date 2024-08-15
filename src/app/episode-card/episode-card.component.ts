import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Episode } from '../models/episode';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [MatCardModule, DatePipe],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.scss',
})
export class EpisodeCardComponent {
  @Input() episode!: Episode;
}
