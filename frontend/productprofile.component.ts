import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'productprofile',
  template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title> <h4> Product Profile </h4> </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <mat-list>
                    <mat-list-item> Product Name:  {{productprofile?.productName}} </mat-list-item>
                    <mat-list-item> Price: {{productprofile?.productUnitprice}} </mat-list-item>
                    <mat-list-item> Description: {{productprofile?.productDescription}} </mat-list-item>
                 </mat-list>
            </mat-card-content>
        </mat-card> 
        <mat-card>
            <button (click)="post()" mat-raised-button color="primary"> Add to Cart </button>
        </mat-card>       
  `
})
export class ProductprofileComponent {
    constructor (private apiService: ApiService, private route: ActivatedRoute) {}

    productprofile
    ngOnInit() {
        var id = this.route.snapshot.params.id
        this.apiService.getProductprofile(id).subscribe(data => this.productprofile = data)
    }

    post() {
        this.apiService.addtocart(this.productprofile)
    }
}
