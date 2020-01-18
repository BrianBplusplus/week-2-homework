function getPerson(number) {
  fetch(`https://swapi.co/api/people/${number}/`) 
    .then(response => response.json())
    
    .then(myJson => {
      const name = myJson.name;
      const height = myJson.height;

      const apiElement = document.createElement('p');
      apiElement.innerHTML = `${name} is ${height}cm tall!`;

      const apiLocation = document.getElementById(`${number}`);

      apiLocation.innerHTML = '';
      apiLocation.appendChild(apiElement);
    })

    .catch(error => {
      alert("something went wrong with getPerson()");
      console.error("I AM ERROR!", error);
    });
};

getPerson(1);