export class Keg {
  public empty: boolean = false;
  graphic: string = "/resources/images/full-beer.png"
  constructor(public name: string, public brewery: string, public price: number, public alcoholContent: number, public pints: number) { }

volume() {
  if(this.pints <= 50) {
    this.graphic = "/resources/images/glass-half-full.png"
  }
  if (this.pints <= 10) {
    this.graphic = "/resources/images/empty-mug-beer.png"
  }
}

}
