


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  currentBrands: Brand;
  brands: Brand[] = []
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data
    })
  }
  setCurrentBrands(brand: Brand) {
    this.currentBrands = brand;

  }
   getCurrentBrands(brand:Brand){
     if(brand==this.currentBrands){
       return "list-group-item active"
   }
   else{
     return "list-group-item"
   }
  }


}
