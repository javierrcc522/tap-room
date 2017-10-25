class Keg {
  empty: boolean = false;

  constructor(public name: string, public brewery: string, public price: number, public alcoholContent: number, public pints: number){}

  markEmpty(){
    this.empty = true;
  }

}

var kegs: Keg[] = [];
// kegs.push(new Keg('Do the dishes.', 'Medium'));
// kegs.push(new Keg('Buy chocolate.', 'Low'));
// kegs.push(new Keg('Do laundry.', 'High'));

kegs[0].markEmpty();

for(var keg of kegs){
  console.log(keg);
}
