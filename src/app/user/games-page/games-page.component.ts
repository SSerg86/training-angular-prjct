import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/shared/interfaces';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit, OnDestroy {
  games: Game[] = [];
  library: Game[] = [];
  gameSubscr: Subscription;
  searchGameByName: string;
  searchGameByPrice: string;
  filterAction: string;
  filterIndie: string;
  filterAdventure: string;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    setTimeout(() => {
      this.gameSubscr = this.gamesService.getAll().subscribe((games) => {
        this.games = games;
      });
    }, 500);
  }

  ngOnDestroy() {
    if (this.gameSubscr) {
      this.gameSubscr.unsubscribe();
    }
  }

  addToLibrary(game: Game) {
    this.gamesService.addToLibrary(game).subscribe(() => {
      return this.library.push(game);
    });
    window.alert('Game has been added to the library!');
  }

  onCheckboxChange(event: any, value: string) {
    switch (value) {
      case 'action':
        event.target.checked
          ? (this.filterAction = value)
          : (this.filterAction = '');
        break;
      case 'indie':
        event.target.checked
          ? (this.filterIndie = value)
          : (this.filterIndie = '');
        break;
      case 'adventure':
        event.target.checked
          ? (this.filterAdventure = value)
          : (this.filterAdventure = '');
        break;
    }
  }
}
