import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}

    newProduct: any = {};
    err: any = {};

  ngOnInit() {
  }

  addProduct() {
    console.log('in component');
    let observable = this._httpService.create(this.newProduct);
    observable.subscribe(data => {

      if(data['error']){
        console.log('Data: ', data)
        console.log('Erros:', data['error']['errors']);
        this.err = data['error']['errors'];
        console.log('err: ', this.err);
      }
      else{
        console.log('added product', data);
        this._router.navigate(['/products']);
      }

    })
  }

}
