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

  getOne(id) {
    return this._http.get(`/product/${id}`);
  }

  create(prod) {
    console.log('In service')
    return this._http.post('/product/create', prod)
  }

  edit(id, update) {
    console.log('In service');
    return this._http.put(`/product/update/${id}`, update);
  }

  delete(id) {
    console.log('In service');
    return this._http.delete(`/products/delete/${id}`)
  }

}

