// battle of the bands function practice 

let bandNumber = 0

const takeNumber = function(n) {

    bandNumber++;
    return n;
}
bandNumber=takeNumber(bandNumber);
const scum = takeNumber("Galactic Scum")
console.log(bandNumber + " " + scum)  // This should print "1. Galactic Scum" in the console
const under = takeNumber("Underdogs")
console.log(bandNumber + " " + under)  // This should print "2. Underdogs" in the console


