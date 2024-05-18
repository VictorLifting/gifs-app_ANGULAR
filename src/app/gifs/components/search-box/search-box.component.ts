import { GifsService } from './../../services/gifs.service';
import { Component,  ElementRef,  ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput>
  `,
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
constructor(private gifsService: GifsService){}

  @ViewChild('txtTagInput')
  tagInput! : ElementRef<HTMLInputElement>;

  
  searchTag():void{
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    console.log(this.gifsService.tagsHistory);
    this.tagInput.nativeElement.value = '';
  }

}
