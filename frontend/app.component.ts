import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/"> E-Stationary </button>
        <button mat-stroked-button routerLink="/users"> Users </button>
        <button mat-stroked-button routerLink="/product"> Add Product </button>
        <button mat-stroked-button *ngIf="authService.isAuthenticated" routerLink="/productlist"> Product List </button>
        <button mat-stroked-button *ngIf="authService.isAuthenticated" routerLink="/cart">Shopping Cart</button>
        <span style="flex: 1 1 auto"></span>
        <button mat-raised-button color="accent" *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
        <button mat-raised-button color="primary" *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
        <button mat-raised-button color="warn" *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor (private authService: AuthService) {}

  title = 'my app';
}
