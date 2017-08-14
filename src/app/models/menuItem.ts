export class MenuItem {
  static load(data): MenuItem {
    return new MenuItem(data.name, data.url);
  }

  constructor(
    public name: string,
    public url: string
  ) {}
}
