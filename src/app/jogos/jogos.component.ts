import { Component, OnInit } from '@angular/core';
import {Jogo} from './jogo';

@Component({
  selector: 'spa-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos: Jogo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.jogos = [
      {
        name: 'Dark Souls Remaster',
        image: '/assets/images/DSR.png',
      },
      {
        name: 'Dark Souls 2',
        image: '/assets/images/DS2.png',
      },
      {
        name: 'Dark Souls 3',
        image: '/assets/images/DS3.png',
      },
      {
        name: 'Bloodborne',
        image: '/assets/images/BB.png',
      },
      {
        name: 'Sekiro',
        image: '/assets/images/Sekiro.png',
      },
      {
        name: "Demon's Souls",
        image: '/assets/images/DeS.png',
      },
      {
        name: 'Genshin Impact',
        image: '/assets/images/Genshin.png',
      },
    ]
  }

}
