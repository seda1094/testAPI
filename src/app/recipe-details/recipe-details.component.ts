import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewServiceService } from '../new-service.service';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  public recipeId;
  public query;
  response: any;
  constructor(private route: ActivatedRoute,private http: HttpClient, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    let query = this.route.snapshot.paramMap.get('query');
    this.recipeId = id;
    this.query = query;
  }

 
  serach() {
    // this.http.get('https://api.github.com/users/' + this.username)
    // this.http.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + this.username
    //   + '&appid=82e20a372f8402c362416956a99a7f1a')
      this.http.get('https://api.edamam.com/search?q='+this.query+'&app_id=9fc563c8&app_key=1b2bc497f2e84e49eace28eeb1d0be00&from=0&to=3&calories=591-722&health=alcohol-free')
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    })
  }
  ngAfterContentInit(){
    this.serach()
  }
}
