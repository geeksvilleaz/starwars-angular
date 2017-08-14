export class Film {
  static load(data): Film {
    return new Film(
      data.characters,
      data.director,
      data.episode_id,
      data.opening_crawl,
      data.planets,
      data.producer,
      data.release_date,
      data.species,
      data.starships,
      data.title,
      data.url,
      data.vehicles
    );
  }

  constructor(
    public characters: any,
    public director: string,
    public episode_id: number,
    public opening_crawl: string,
    public planets: any,
    public producer: any,
    public release_date: string, // DATE
    public species: any,
    public starships: any,
    public title: string,
    public url: string,
    public vehicles: any,
    public name: string = ''
  ) {}
}
