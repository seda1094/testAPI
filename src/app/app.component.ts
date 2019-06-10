import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "";
  response: any;

  constructor(private http: HttpClient)
  {

  }
  serach() {
    // this.http.get('https://api.github.com/users/' + this.username)
    // this.http.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + this.username
    //   + '&appid=82e20a372f8402c362416956a99a7f1a')
      this.http.get('https://api.edamam.com/search?q='+this.username+'&app_id=9fc563c8&app_key=1b2bc497f2e84e49eace28eeb1d0be00&from=0&to=3&calories=591-722&health=alcohol-free')
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    })
  }
}

