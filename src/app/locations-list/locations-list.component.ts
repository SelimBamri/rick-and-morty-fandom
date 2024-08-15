import { Component } from '@angular/core';
import { Location } from '../models/location';
import { Observable } from 'rxjs';
import { NgIf, NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { LocationCardComponent } from '../location-card/location-card.component';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-locations-list',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, LocationCardComponent, MatPaginatorModule],
  templateUrl: './locations-list.component.html',
  styleUrl: './locations-list.component.scss',
})
export class LocationsListComponent {
  totalItems = 126;
  pageSize = 20;
  currentPage = 0;
  locations$!: Observable<Location[]>;
  constructor(private locationService: LocationService) {}
  ngOnInit(): void {
    this.locations$ = this.locationService.getLocations(this.currentPage + 1);
  }
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.locations$ = this.locationService.getLocations(this.currentPage + 1);
  }
}
