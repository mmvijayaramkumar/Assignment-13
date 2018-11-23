import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'post',
  template: `
         <mat-card>
            <mat-card-header>
                <mat-card-title> <h4> Welcome to E-Stationery </h4> </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <mat-card> <h3> Step 1: New Users, click on 'Register' button and provide your name, email and password for registration </h3> </mat-card>
                <mat-card> <h3> Step 2: Existing Users, click on 'Login' button and provide your credentials  </h3> </mat-card>
                <mat-card> <h3> Step 3: Select the required items from 'Product List'  </h3> </mat-card>
                <mat-card> <h3> Step 4: Select the required products and click on 'Add to Cart'  </h3> </mat-card>
                <mat-card> <h3> Step 5: To order, click 'Shopping Cart' and order the items that are added to the Cart  </h3> </mat-card>
            </mat-card-content>
        </mat-card>
  `
})
export class PostComponent {
  constructor (private apiService: ApiService) {}

    postMsg = ''
    post() {
        this.apiService.postMessage({msg: this.postMsg})
    }
}
