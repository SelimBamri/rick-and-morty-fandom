export class Character {
  constructor(
    public id: number,
    public numberOfEpisodes: number,
    public location: string,
    public name: string,
    public status: string,
    public species: string,
    public gender: string,
    public origin: string,
    public image: string
  ) {}
}
