import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component, NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchItem',component:HomeComponent},
    {path:'tag/:tag',component:HomeComponent},
    {path:'food/:id',component:FoodpageComponent},
    {path:'cart-page',component:CartPageComponent}
];







