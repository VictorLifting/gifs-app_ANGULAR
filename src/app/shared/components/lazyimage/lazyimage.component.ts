import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',
})

export class LazyimageComponent implements OnInit {
  
  @Input()
  url! : string;

   hasLoaded : boolean = false;
  
  
  ngOnInit(): void {
    if(!this.url){
      throw new Error('url is required');
    }
  }

  onLoad(): void{
    console.log("cargó")
    this.hasLoaded = true;
  }



}
