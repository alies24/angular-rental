import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44315/api/"
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<DataResponseModel<Car>> {
    let getAllUrl= this.apiUrl + "cars/cardetails";
     return this.httpClient.get<DataResponseModel<Car>>(getAllUrl);
  }
  getCarsByBrand(brandId:number):Observable<DataResponseModel<Car>>{

    let getBrandUrl = this.apiUrl + "cars/carbrandid?brandId="+ brandId
    return this.httpClient.get<DataResponseModel<Car>>(getBrandUrl);


  }
  getCarsByColor(colorId:number):Observable<DataResponseModel<Car>>{
    let getColorUrl = this.apiUrl+ "cars/carcolorid?colorId="+ colorId
    return this.httpClient.get<DataResponseModel<Car>>(getColorUrl);
  }
}
