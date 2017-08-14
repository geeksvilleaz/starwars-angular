import { Film } from './film';
import { Person } from './person';

export class Planet {
  static load(planet) {
    return new Planet(
      planet.climate,
      planet.diameter,
      planet.films,
      planet.gravity,
      planet.name,
      planet.orbital_period,
      planet.population,
      planet.residence,
      planet.rotation_period,
      planet.service_water,
      planet.terrain,
      planet.url
    );
  }

  constructor(
    public climate: string,
    public diameter: number,
    public films: Film[],
    public gravity: string,
    public name: string,
    public orbital_period: number,
    public population: number,
    public residence: Person[],
    public rotation_period: number,
    public service_water: number,
    public terrain: string,
    public url: string,
    public title: string = ''
  ) {}
}
