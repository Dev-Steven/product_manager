import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/products')
  }

  create(prod) {
    console.log('In service')
    return this._http.post('/product/create', prod)
  }

  delete(id) {
    console.log('In service');
    return this._http.delete(`/products/delete/${id}`)
  }

}

