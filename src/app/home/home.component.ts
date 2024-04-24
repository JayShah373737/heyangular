import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app.routes';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { TagsComponent } from "../tags/tags.component";
import { RouterLink } from '@angular/router';
import { Foods } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, SearchComponent, TagsComponent, RouterLink, NotFoundComponent]
})
export class HomeComponent implements OnInit{
red: any;
black: any;
onRate($event: Event) {
throw new Error('Method not implemented.');
}
  foods:Foods[]=[];
  constructor(private fs:FoodService,private route:ActivatedRoute){}

  ngOnInit():void{
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.foods=this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
      
      else
      this.foods=this.fs.getAll();
    });
    
    // console.log(this.fs.getAll());
  }

}




