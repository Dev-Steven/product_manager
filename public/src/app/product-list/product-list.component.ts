import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: any;

  constructor(
    public _httpService: HttpService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    console.log('In component');
    let observable = this._httpService.getAll();
    observable.subscribe( data => {
      console.log('Data: ', data)
      console.log('Products: ', data['products'])
      this.productList = data['products'];
    })
  }

  deleteProduct(id: String) {
    console.log('In component');
    let observable= this._httpService.delete(id);
    observable.subscribe( data => {
      console.log('product deleted');
      this.getAll();
    })

  }

}
