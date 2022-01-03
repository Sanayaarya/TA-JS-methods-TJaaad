// NOTE: You can not use reduce methods to solve this exercise


function countAllPeople() {
  let count = 0;

  got.houses.forEach((house) => {
    count += house.people.length;
  });

  return count;
x
}

function peopleByHouses() {
  // your code goes here
  let Obj = {};
  got.houses.forEach((house) => {
    Obj[house.name] = house.people.length;
  });
  return Obj;
}

function everyone() {
  // your code goes here
  
  got.house.forEach((house)=>{
    for (let i = 0; i < house.people.length; i++) {
      everyPerson.push(house.people[i].name);
    }
  });
  return everyone;
}


function nameWithS() {
  let personWithS = [];
  got.houses.forEach((house) => {
    for (let i = 0; i < house.people.length; i++) {
      if (house.people[i].name.toUpperCase().includes("S")) {
        personWithS.push(house.people[i].name);
      }
    }
  });
  return personWithS;
}

function nameWithA() {
  let personWithA = [];
  got.houses.forEach((house) => {
    for (let i = 0; i < house.people.length; i++) {
      if (house.people[i].name.toUpperCase().includes("A")) {
        personWithA.push(house.people[i].name);
      }
    }
  });
  return personWithA;
}

function surnameWithS() {
  let surNameWithS = [];
  got.houses.forEach((house) => {
    for (let i = 0; i < house.people.length; i++) {
      if (
        house.people[i].name
          .split(" ")
          [house.people[i].name.split(" ").length - 1].includes("S")
      ) {
        surNameWithS.push(house.people[i].name);
      }
    }
  });
  return surNameWithS;
}

function surnameWithA() {
  let surNameWithA = [];
  got.houses.forEach((house) => {
    for (let i = 0; i < house.people.length; i++) {
      if (
        house.people[i].name
          .split(" ")
          [house.people[i].name.split(" ").length - 1].includes("A")
      ) {
        surNameWithA.push(house.people[i].name);
      }
    }
  });
  return surNameWithA;
}

function peopleNameOfAllHouses() {
  let Obj = {};
  got.houses.forEach((house) => {
    Obj[house.name] = house.people.map((prsn) => prsn.name);
  });
  return Obj;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
