import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44315/api/Cars/cardetails"
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<DataResponseModel<Car>> {
     return this.httpClient.get<DataResponseModel<Car>>(this.apiUrl);
  }
}
