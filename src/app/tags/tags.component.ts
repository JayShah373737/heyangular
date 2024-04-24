import { Component, Input, OnInit, input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';



@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  @Input()
  foodPagetags?:string[];

  @Input()
  justifyContent:string='center';

  tags?:Tag[]=[];
  constructor(private fs:FoodService){}
  ngOnInit(): void {
    if(!this.foodPagetags)
      this.tags=this.fs.getAllTag();
  }

}
