let origDogs = ["Bulldog","Beagle","Labrador"];
console.log(origDogs);
let cats  = ["Americal Curl","Bengal"];
let birds = ["Falcons","Ducks","Flamingoes"];

let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs,"Pomeranian"];
console.log(origDogs);
let dogs = origDogs.slice(0);

let pushDog = dogs.push("Golden Retriver");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

let addFirst = dogs.unshift("Golden Retriver");
let shiftDog = dogs.shift();

dogs.splice(2,1,"Pub","Boxer");

let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs,...cats,...birds].toString();
function scanArray([first,second])
{
    console.log("Scan: "+first+""+second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals)allAnimals += animal + " ";

console.log("Animals :" + allAnimals);
