import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  query: string = "";
  constructor( private router: Router) { }

  ngOnInit() {
  }
  sendSearchQuery(){
    this.router.navigate(['/list',this.query])
 }
}
