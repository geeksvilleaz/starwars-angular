export class Person {
  static load(data) {
    return new Person(
      data.birth_year,
      data.eye_color,
      data.films,
      data.gender,
      data.hair_color,
      data.height,
      data.homeworld,
      data.mass,
      data.name,
      data.skin_color,
      data.species,
      data.starships,
      data.url,
      data.vehicles
    );
  }

  constructor(
    public birth_year: number,
    public eye_color: string,
    public films: any[],
    public gender: string,
    public hair_color: string,
    public height: number,
    public homeworld: string,
    public mass: number,
    public name: string,
    public skin_color: string,
    public species: any[],
    public starships: any[],
    public url: string,
    public vehicles: any[],
    public title: string = ''
  ) {}
}
