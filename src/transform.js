const groupAdultsByAgeRange = (persons) => {
  const overEighteen = persons.filter(currentPerson => {
    if (currentPerson.age > 18) {
      return currentPerson;
    };
  });

  return overEighteen.reduce((categories, currentPerson) => {
    if(currentPerson.age <= 20) {
      if(categories.underTwenty === undefined) {
        categories.underTwenty = [currentPerson];
      }; 
      categories.underTwenty.push(currentPerson);
    };

    if (currentPerson.age >= 21 && currentPerson.age <= 30) {
      if(categories.underThirty === undefined) {
        categories.underThirty = [currentPerson];
      };
      categories.underThirty.push(currentPerson);
    };

    if (currentPerson.age >= 31 && currentPerson.age <= 40) {
      if(categories.underForty === undefined) {
        categories.underForty = [currentPerson];
      };
      categories.underForty.push(currentPerson);
    }

    if (currentPerson.age >= 41 && currentPerson.age <= 50) {
      if(categories.underFifty === undefined) { 
        categories.underFifty = [currentPerson];
      }; 
      categories.underFifty.push(currentPerson);
    };

    if (currentPerson.age >= 51) {
      if(categories.overFifty === undefined) {
        categories.overFifty = [currentPerson];
      }; 
      categories.overFifty.push(currentPerson);
    }; 
    return categories;
  }, {});
};

module.exports = {groupAdultsByAgeRange};

