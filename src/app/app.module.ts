import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuildingComponent } from './building/building.component';
import { ServicesComponent } from './services/services.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { FoodComponent } from './food/food.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FilterPipe } from './filter.pipe';
import { FilterSearchPipe } from './filter-search.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { SortByNotePipe } from './sort-by-note.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BuildingComponent,
    ServicesComponent,
    ManufacturingComponent,
    FoodComponent,
    StarRatingComponent,
    FilterPipe,
    FilterSearchPipe,
    NotFoundComponent,
    ArtisanComponent,
    SortByNotePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}