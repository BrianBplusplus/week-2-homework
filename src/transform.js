const groupAdultsByAgeRange = (persons) => {
  const overEighteen = persons.filter(currentPerson => {
    if (currentPerson.age >= 19) {
      return currentPerson;
    }
  })

  return overEighteen.reduce((categories, currentPerson) => {

      categories.underTwenty = [] 
      categories.underThirty = []
      categories.underForty = []
      categories.underFifty = []  
      categories.overFifty = []   


    if(currentPerson.age <= 20) {
      categories.underTwenty.push(currentPerson)
    } 
    else if (currentPerson.age <= 30) {
      categories.underThirty.push(currentPerson)
    }
    else if (currentPerson.age <= 40) {
      categories.underForty.push(currentPerson)
    }
    else if (currentPerson.age <= 50) {
      categories.underFifty.push(currentPerson)
    }
    else {
      categories.overFifty.push(currentPerson)
    } 
  console.log(categories)  
  return categories
  }, {}); 

};


/*
    - `20 and younger`
    - `21-30`
    - `31-40`
    - `41-50`
    - `51 and older`
*/

// DELETE THIS AFTER TESTING !!!!!! -------------
const testgroup1 = [
  { name: "pete", age: 19 },
  { name: "pete", age: 19 },
  { name: "pete", age: 19 },
  { name: "dove", age: 29 },
  { name: "henry", age: 19 },
  { name: "Johnny", age: 30 },
  { name: "Fredrick", age: 23 },
  { name: "Lisa", age: 55 },
  { name: "pete", age: 78 },
  { name: "pete", age: 55 },
  { name: "pete", age: 56 },
  { name: "dove", age: 57 },
  { name: "henry", age: 43 },
  { name: "Johnny", age: 42 },
  { name: "Fredrick", age: 32 },
  { name: "Lisa", age: 1200 },
]

const testgroup2 = [
  { name: "petedqwdqw", age: 35 },
  { name: "pete", age: 55 },
  { name: "pete", age: 19 },
  { name: "pete", age: 25 },
  { name: "pete", age: 47 },
]

groupAdultsByAgeRange(testgroup2);

module.exports = {groupAdultsByAgeRange};



