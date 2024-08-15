import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Location } from '../models/location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss',
})
export class LocationCardComponent {
  constructor(private router: Router) {}
  @Input() location!: Location;
}
