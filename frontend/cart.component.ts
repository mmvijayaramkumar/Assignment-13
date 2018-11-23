import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'cart',
  template: `
         <mat-card>
            <mat-card-header>
                <mat-card-title> <h4> Shopping Cart list </h4> </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div *ngFor="let cartitem of apiService.cartitems">
                  <mat-card>
                    <h3> {{cartitem.productName}} </h3>
                    <button (click)="post()" mat-raised-button color="primary"> Order Item </button>
                    <button (click)="post()" mat-raised-button color="accent"> Remove from Cart </button>
                  </mat-card>
                </div> 
              <br>
              
            </mat-card-content>
        </mat-card>  
  `
})
export class CartComponent {
  constructor (private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCart();
  }

  post() {
//        this.apiService.addtocart(this.productprofile)
    }
}
