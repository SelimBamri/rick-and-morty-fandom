import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatListModule],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.scss',
})
export class CharacterPageComponent implements OnInit {
  character$!: Observable<Character>;
  characterId!: number;
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  getPronoun(gender: string): string {
    switch (gender?.toLowerCase()) {
      case 'male':
        return 'He';
      case 'female':
        return 'She';
      default:
        return 'It';
    }
  }
  ngOnInit(): void {
    this.characterId = Number(this.route.snapshot.paramMap.get('id'));
    this.character$ = this.characterService.getCharacterById(this.characterId);
  }
}
