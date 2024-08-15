import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import { Observable } from 'rxjs';
import { NgIf, NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, CharacterCardComponent, MatPaginatorModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent implements OnInit {
  totalItems = 826;
  pageSize = 20;
  currentPage = 0;
  characters$!: Observable<Character[]>;
  constructor(private characterService: CharacterService) {}
  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters(
      this.currentPage + 1
    );
  }
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.characters$ = this.characterService.getCharacters(
      this.currentPage + 1
    );
  }
}
