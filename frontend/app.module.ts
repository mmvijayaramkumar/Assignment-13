import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.component'
import { ProfileComponent } from './profile.component'
import { CartComponent } from './cart.component'
import { PostComponent } from './post.component'
import { ProductComponent } from './product.component'
import { ProductlistComponent } from './productlist.component'
import { ProductprofileComponent } from './productprofile.component'
import { AuthInterceptorService } from './authInterceptor.service'

const routes=[
  { path: '', component: PostComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'productlist', component: ProductlistComponent},
  { path: 'users', component: UsersComponent},
  { path: 'cart', component: CartComponent},
  { path: 'product', component: ProductComponent},
  { path: 'productprofile/:id', component: ProductprofileComponent},
  { path: 'profile/:id', component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent, 
    MessagesComponent, 
    RegisterComponent, 
    LoginComponent, 
    UsersComponent,
    PostComponent,
    ProductComponent,
    CartComponent,
    ProductlistComponent,
    ProductprofileComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [ApiService,AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
