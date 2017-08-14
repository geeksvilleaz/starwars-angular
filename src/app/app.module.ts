import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { ButtonComponent } from './button/button.component';
import { FilmComponent } from './item/types/film.component';
import { ItemComponent } from './item/item.component';
import { ItemCollectionComponent } from './item/item-collection.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PersonComponent } from './item/types/person.component';
import { PlanetComponent } from './item/types/planet.component';
import { SpeciesComponent } from './item/types/species.component';
import { StarshipComponent } from './item/types/starship.component';
import { VehicleComponent} from './item/types/vehicle.component';

import { StarWarsService } from './star-wars.service';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    ButtonComponent,
    FilmComponent,
    ItemComponent,
    ItemCollectionComponent,
    ListComponent,
    ListItemComponent,
    PaginationComponent,
    PersonComponent,
    PlanetComponent,
    SpeciesComponent,
    StarshipComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
