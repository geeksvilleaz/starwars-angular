import { Film } from './film';
import { Person } from './person';

export class Vehicle {
  static load(data) {
    return new Vehicle(
      data.cargo_capacity,
      data.consumables,
      data.cost_in_credits,
      data.crew,
      data.films,
      data.length,
      data.manufacturer,
      data.max_atmosphering_speed,
      data.model,
      data.name,
      data.passengers,
      data.pilots,
      data.url,
      data.vehicle_class
    );
  }

  constructor(
    public cargo_capacity: number,
    public consumables: number,
    public cost_in_credits: number,
    public crew: number,
    public films: Film[],
    public length: number,
    public manufacturer: string,
    public max_atmosphering_speed: number,
    public model: string,
    public name: string,
    public passengers: number,
    public pilots: Person[],
    public url: string,
    public vehicle_class: string,
    public title: string = ''
  ) {}
}
