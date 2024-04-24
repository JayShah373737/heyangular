import { Foods } from "./food";

export class CartItem{
    changeQuantity(id: number, arg1: number) {
      throw new Error('Method not implemented.');
    }
    constructor(food:Foods){
        this.food= food;
    }
    food:Foods;
    quantity:number= 1;
    get price():number{
        return this.food.price * this.quantity;
    }
}