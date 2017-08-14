import { Film } from './film';
import { Person } from './person';
import { Planet } from './planet';

export class Species {
  static load(data): Species {
    return new Species(
      data.average_height,
      data.average_lifespan,
      data.classification,
      data.designation,
      data.eye_colors,
      data.films,
      data.hair_colors,
      data.homeworld,
      data.language,
      data.name,
      data.people,
      data.skin_colors,
      data.url
    );
  }

  constructor(
    public average_height: number,
    public average_lifespan: number,
    public classification: string,
    public designation: string,
    public eye_colors: string,
    public films: Film[],
    public hair_colors: string,
    public homeworld: Planet,
    public language: string,
    public name: string,
    public people: Person[],
    public skin_colors: string,
    public url: string,
    public title: string = ''
  ) {}
}
