import { Color } from './../../models/color';

import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[]
  currentColors:Color;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
  };

  getBrands(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors = response.data
    });
  }
  setCurrentColors(color:Color){
    this.currentColors = color;

  }
  getCurrentColors(color:Color){
    if(color==this.currentColors){
      return "list-group-item active"
  }
  else{
    return "list-group-item"
  }
  }
}



