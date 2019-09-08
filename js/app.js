document.addEventListener('DOMContentLoaded', () => {

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const bookedList = document.querySelector('.booked-list');
    
    const newTableRow = document.createElement('tr');
    bookedList.appendChild(newTableRow);
    
    const dogName = event.target.dog_name.value;
    const nameCell = document.createElement('td');
    nameCell.textContent = dogName;
    newTableRow.appendChild(nameCell);
    
    const dogBreed = event.target.dog_breed.value;
    const breedCell = document.createElement('td');
    breedCell.textContent = dogBreed;
    newTableRow.appendChild(breedCell);

    const dateFrom = event.target.date_from.value;
    const dateFromCell = document.createElement('td');
    dateFromCell.textContent = dateFrom;
    newTableRow.appendChild(dateFromCell);

    const dateUntil = event.target.date_until.value;
    const dateUntilCell = document.createElement('td');
    dateUntilCell.textContent = dateUntil;
    newTableRow.appendChild(dateUntilCell);

    event.target.reset()
  };

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);

});
