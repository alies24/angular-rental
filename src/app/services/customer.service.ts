
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiUrl = 'https://localhost:44315/api/Customers/customergetall'
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<DataResponseModel<Customer>>{
    return this.httpClient.get<DataResponseModel<Customer>>(this.apiUrl);
  }
}
