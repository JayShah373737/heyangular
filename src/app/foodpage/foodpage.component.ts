import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { __param } from 'tslib';
import { TagsComponent } from "../tags/tags.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
// import { Router } from 'express';
import { Router } from '@angular/router';
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
    selector: 'app-foodpage',
    standalone: true,
    templateUrl: './foodpage.component.html',
    styleUrl: './foodpage.component.css',
    imports: [TagsComponent, CommonModule, NotFoundComponent]
})
export class FoodpageComponent implements OnInit {
    food!:Foods;
    constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService,private cartService:CartService,
      private router:Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food=foodService.getFoodById(params['id'])
      })
    }
    ngOnInit(): void {
    }
    addToCart(){
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart-page');
    }
}
