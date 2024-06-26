import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
// import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchItem:string='';
  constructor(private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        if(params['searchItem'])
        this.searchItem=params['searchItem'];

      })
  }
  search(): void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/' + this.searchItem)
  }
}
