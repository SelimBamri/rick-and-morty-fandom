import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { LocationsListComponent } from './locations-list/locations-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersListComponent },
  { path: 'characters/:id', component: CharacterPageComponent },
  { path: 'locations', component: LocationsListComponent },
];
