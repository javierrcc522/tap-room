export class Keg {
  public empty: boolean = false;
  constructor(public name: string, public brewery: string, public price: number, public alcoholContent: number, public pints: number) { }
}
