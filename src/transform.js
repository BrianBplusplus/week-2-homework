const groupAdultsByAgeRange = (persons) => {
  const overEighteen = persons.filter(currentPerson => {
    if (currentPerson.age > 17) {
      return currentPerson;
    };
  });

  const reducer = overEighteen.reduce((categories, currentPerson) => {
    if(currentPerson.age <= 20) {
      if(categories.underTwenty === undefined) {
        categories.underTwenty = [currentPerson];
        return categories;
      }; 
      categories.underTwenty.push(currentPerson);
      return categories;
    };

    if (currentPerson.age >= 21 && currentPerson.age <= 30) {
      if(categories.underThirty === undefined) {
        categories.underThirty = [currentPerson];
        return categories;
      };
      categories.underThirty.push(currentPerson);
      return categories;
    };

    if (currentPerson.age >= 31 && currentPerson.age <= 40) {
      if(categories.underForty === undefined) {
        categories.underForty = [currentPerson];
        return categories;
      };
      categories.underForty.push(currentPerson);
      return categories;
    }

    if (currentPerson.age >= 41 && currentPerson.age <= 50) {
      if(categories.underFifty === undefined) { 
        categories.underFifty = [currentPerson];
        return categories;
      }; 
      categories.underFifty.push(currentPerson);
      return categories;
    };

    if (currentPerson.age >= 51) {
      if(categories.overFifty === undefined) {
        categories.overFifty = [currentPerson];
        return categories;
      }; 
      categories.overFifty.push(currentPerson);
      return categories;
    }; 
  }, {});

  const result = {
    '20 and younger': reducer.underTwenty,
    '21-30': reducer.underThirty,
    '31-40': reducer.underForty,
    '41-50': reducer.underFifty,
    '51 and older': reducer.overFifty,
  };

  function clearUndefined(input) {
    Object.keys(input).forEach(key => input[key] === undefined && delete input[key])
  };

  clearUndefined(result);
  return result;
};

module.exports = {groupAdultsByAgeRange};

