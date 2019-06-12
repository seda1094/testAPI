import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor()
  {

  }
}

