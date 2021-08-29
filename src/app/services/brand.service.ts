import { Brand } from './../models/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
apiUrl ='https://localhost:44315/api/Brands/brandgetall'
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<DataResponseModel<Brand>>{
    return this.httpClient.get<DataResponseModel<Brand>>(this.apiUrl);

  }
}
