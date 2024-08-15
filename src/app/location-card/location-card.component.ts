import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Location } from '../models/location';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss',
})
export class LocationCardComponent {
  @Input() location!: Location;
}
