import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'product',
  templateUrl: 'product.component.html'
})
export class ProductComponent {
    productData = {}
    constructor (private apiService: ApiService) {}
 
    post() {
        console.log(this.productData)
        this.apiService.registerProduct(this.productData)
    }
}
