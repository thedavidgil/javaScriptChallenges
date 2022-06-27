const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map(character => character.name);

//2. Get array of all heights
const allHeights = characters.map(character => character.height);

//3. Get array of objects with just name and height properties
const height_name = characters.map(character => { return { name: character.name, height: character.height } });

//4. Get array of all first names
const firstNames = characters.map(character => character.name.split(" ")[0] );



//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);// acc: acumulador, cur: current value, 0: initial value of acc

//2. Get total height of all characters
const totalHeight = characters.reduce((acc,cur) => acc + cur.height, 0)

//3. Get total number of characters by eye color
const characterByEyeColor = characters.reduce((acc, cur) => {

  const color = cur.eye_color;
  if (acc[color]) {

    acc[color]++;

  } else {

    acc[color] = 1

  }
  return acc
},{})

//4. Get total number of characters in all the character names
const charactersNameNumber = characters.reduce((acc,cur) => acc + cur.name.length, 0)



//***FILTER***
//1. Get characters with mass greater than 100
const heavierThan100 = characters.filter(character => character.mass > 100);

//2. Get characters with height less than 200
const massLessThan200 = characters.filter(character => character.mass < 200);
//3. Get all male characters
const maleCharacters = characters.filter(characters => characters.gender === "male");

//4. Get all female characters
const femaleCharacters = characters.filter(characters => characters.gender === "female");



//***SORT***
// NOTE: Funcion sort() recibe una funcion de comparacion

//1. Sort by mass
const byMass = characters.sort((a, b) => a.mass - b.mass); // ascendente

//2. Sort by height
const byHeight = characters.sort((a, b) => b.height - a.height); // descente

//3. Sort by name
const byName = characters.sort((a, b) =>  a.name < b.name ? -1 : 1 ); // ascendente

//4. Sort by gender
const byGender = characters.sort((a,b) => a.gender === "female" ? -1 : 1) // female first



//***EVERY***
//1. Does every character have blue eyes?
const blueEyes = characters.every(character => character.eye_color === "blue");

//2. Does every character have mass more than 40?
const massOver40 = characters.every(character => character.mass > 40);

//3. Is every character shorter than 200?
const shorterThan200 = characters.every(character => character.height < 200);

//4. Is every character male?
const allFemale = characters.every(character => character.gender === "female");



//***SOME***
//1. Is there at least one male character?
const anyMale = characters.some(character => character.gender === "male");

//2. Is there at least one character with blue eyes?
const anyBlueEye = characters.some(character => character.eye_color === "blue");

//3. Is there at least one character taller than 210?
const tallerThan210 = characters.some(character => character.height > 210);

console.log(tallerThan210);