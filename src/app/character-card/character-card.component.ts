import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Character } from '../models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [MatCardModule, MatButton],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  constructor(private router: Router) {}
  @Input() character!: Character;
  onProfileClick(id: number) {
    this.router.navigate([`/characters/${id}`]);
  }
}
