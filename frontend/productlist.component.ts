import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'productlist',
  template: `
        <div *ngFor="let product of apiService.products">
            <mat-card [routerLink]="['/productprofile', product._id]" style="cursor: pointer">{{product.productName}}</mat-card>
        </div> 
  `
})
export class ProductlistComponent {
  constructor (private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts();
  }
}
