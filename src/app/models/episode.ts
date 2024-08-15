export class Episode {
  constructor(
    public id: number,
    public numberOfCharacters: number,
    public airDate: Date,
    public season: number,
    public episodeNumber: number,
    public name: string
  ) {}
}
