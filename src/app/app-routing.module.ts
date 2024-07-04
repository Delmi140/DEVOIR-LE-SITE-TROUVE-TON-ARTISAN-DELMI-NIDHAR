import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuildingComponent } from './building/building.component';
import { ServicesComponent } from './services/services.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {path: "" , component: HomeComponent },
  {path: "building", component:BuildingComponent },
  {path: "services", component: ServicesComponent },
  {path: "manufacturing", component: ManufacturingComponent },
  {path: "food", component: FoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
