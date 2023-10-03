import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  public character?: Character;

  constructor(httpClient: HttpClient) {
    httpClient
      .get('https://api.sarkaz.site/characters/dusk')
      .subscribe((data) => {
        this.character = data as Character;
        console.log(data);
      });
  }
}
