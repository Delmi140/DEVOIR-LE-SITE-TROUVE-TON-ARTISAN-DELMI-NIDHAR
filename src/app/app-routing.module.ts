import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuildingComponent } from './building/building.component';
import { ServicesComponent } from './services/services.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { FoodComponent } from './food/food.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArtisanComponent } from './artisan/artisan.component';

const routes: Routes = [
  {path: "" , component: HomeComponent },
  {path: "building", component:BuildingComponent },
  {path: "services", component: ServicesComponent },
  {path: "manufacturing", component: ManufacturingComponent },
  {path: "food", component: FoodComponent},
 
  {path:"artisan/:id",component:ArtisanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
