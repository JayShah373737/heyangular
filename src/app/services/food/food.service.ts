import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag=="All"?
    this.getAll():this.getAll().filter(food=>food.tags?.
      includes(tag));
  }

  getAllTag():Tag[]{
    return[
      {name:'All',count:8},
      {name:'FastFood',count:5},
      {name:'SlowFood',count:3},
      {name:'Lunch',count:3},
      {name:'Burger',count:2},
      {name:'Rice',count:1},
    ];
  }

  getAll():Foods[]{
    return[
     {
      id:1,
      name:'Burger',
      cookTime:'10-20',
      price:100,
      favorite:false,
      origin:['Italy'],
      stars:4.5,
      imageURL:'/assets/food1.jpg',
      tags:['FastFood','Burger','Lunch'],
     },
     {
      id:2,
      name:'Panner Roll',
      cookTime:'10-20',
      price:100,
      favorite:false,
      origin:['Belgium'],
      stars:4.5,
      imageURL:'/assets/food2.jpg',
      tags:['FastFood','Panner Roll'],
     },
     {
      id:3,
      name:'Fruit Dish',
      cookTime:'5-10',
      price:130,
      favorite:true,
      origin:['India'],
      stars:4.9,
      imageURL:'/assets/food3.jpg',
      tags:['FastFood','FruitDish','Lunch'],
     },
     {
      id:4,
      name:'Pizza',
      cookTime:'15-20',
      price:370,
      favorite:true,
      origin:['Belgium'],
      stars:4.7,
      imageURL:'/assets/food4.jpg',
      tags:['FastFood','Pizza'],
     },
     {
      id:5,
      name:'Burger+Fries',
      cookTime:'10-20',
      price:100,
      favorite:false,
      origin:['America'],
      stars:4.3,
      imageURL:'/assets/food5.jpg',
      tags:['FastFood','Burger'],
     },
     {
      id:6,
      name:'Noddles',
      cookTime:'10-20',
      price:120,
      favorite:false,
      origin:['Japan'],
      stars:3.7,
      imageURL:'/assets/food6.jpg',
      tags:['SlowFood','Noddles'],
     },
     {
      id:7,
      name:'Rice',
      cookTime:'40-50',
      price:150,
      favorite:false,
      origin:['India'],
      stars:4,
      imageURL:'/assets/food7.jpg',
      tags:['SlowFood','Rice'],
     },
     {
      id:8,
      name:'Maggi',
      cookTime:'5-10',
      price:60,
      favorite:true,
      origin:['Asia'],
      stars:4.2,
      imageURL:'/assets/food8.jpg',
      tags:['SLowFood','Maggi','Lunch'],
     }

    ];
  }
}
