
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl='https://localhost:44315/api/Rentals/getrentaldetails'
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<DataResponseModel<Rental>>{
    return this.httpClient.get<DataResponseModel<Rental>>(this.apiUrl);

  }
}
