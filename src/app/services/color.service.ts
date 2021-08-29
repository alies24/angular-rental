import { Color } from './../models/color';
import { DataResponseModel } from './../models/dataResponseModel';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44315/api/Colors/colorgetall"
  constructor(private httpClient: HttpClient) { }

  getColors():Observable<DataResponseModel<Color>>
  {
     return this.httpClient.get<DataResponseModel<Color>>(this.apiUrl);
  }
}
