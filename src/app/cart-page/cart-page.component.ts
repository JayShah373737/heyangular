import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
    selector: 'app-cart-page',
    standalone: true,
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
    imports: [RouterLink, CommonModule, NotFoundComponent]
})
export class CartPageComponent implements OnInit {

  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  ngOnInit(): void {
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); //instance Load Data

  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
