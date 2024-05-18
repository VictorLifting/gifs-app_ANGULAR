import { Gif } from './../../interfaces/gifs.interface';
import { GifsService } from './../../services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private gifsService: GifsService){}

  get gifList() : Gif[] {
  return this.gifsService.ListGif;
  }

  
}
