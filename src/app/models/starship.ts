import { Film } from './film';
import { Person } from './person';

export class Starship {
  static load(data): Starship {
    return new Starship(
      data.MGLT,
      data.cargo_capacity,
      data.consumables,
      data.cost_in_credits,
      data.crew,
      data.films,
      data.hyperdrive_rating,
      data.length,
      data.manufacturer,
      data.max_atmosphering_speed,
      data.model,
      data.name,
      data.passengers,
      data.pilots,
      data.starship_class,
      data.url
    );
  }

  constructor(
    public MGLT: number,
    public cargo_capacity: number,
    public consumables: string,
    public cost_in_credits: number,
    public crew: number,
    public films: Film[],
    public hyperdrive_rating: string,
    public length: number,
    public manufacturer: string,
    public max_atmosphering_speed: number,
    public model: string,
    public name: string,
    public passengers: number,
    public pilots: Person[],
    public starship_class: string,
    public url: string,
    public title: string = ''
  ) {}
}
