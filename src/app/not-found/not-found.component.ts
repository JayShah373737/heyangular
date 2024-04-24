import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {

    @Input() visible:boolean=false;
    @Input() notFoundMessage:string='NothingFound!';
    @Input() resetLinkText:string='Reset';
    @Input() resetLinkRoute:string='/';
    constructor(){}

    ngOnInit(): void {
        
    }
}
