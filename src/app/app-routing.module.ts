import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeSearchComponent} from './recipe-search/recipe-search.component'
import {RecipeListComponent} from './recipe-list/recipe-list.component'


const routes: Routes = [
  { path: 'details/:id/:query', component: RecipeDetailsComponent },
  { path: '', component: RecipeSearchComponent },
  { path: 'list/:query', component: RecipeListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  RecipeDetailsComponent,
  RecipeSearchComponent
]
