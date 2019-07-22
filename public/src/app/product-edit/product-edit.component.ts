import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

    updatedProduct: any;
    currentProduct: any;
    id: any;
    err: any ={};

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("ID: ", params['id']);
      this.id = params['id'];
    })
    this.getProduct();
    this.updatedProduct = {name: "", price: "", img: ""};
  }
  
  getProduct() {
    let observable = this._httpService.getOne(this.id);
    observable.subscribe(data => {
      this.currentProduct = data;
      console.log("Current Product: ", this.currentProduct);
    })
  }
  

  updateProduct() {
    console.log('id: ', this.id);
    console.log('Update Product ', this.updatedProduct);
    let observable = this._httpService.edit(this.id, this.updatedProduct);
    observable.subscribe(data => {
      
      if(data['error']){
        console.log('Errors: ', data['error']['errors']);
        this.err = data['error']['errors'];
      }
      else {
        console.log('successful update', data); 
        this._router.navigate(['/products'])
      }

    });
  }

  deleteProduct(id: String) {
    console.log('In component');
    let observable= this._httpService.delete(id);
    observable.subscribe( data => {
      console.log('product deleted');
      this._router.navigate(['/products']);
    })

  }

}
