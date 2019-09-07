document.addEventListener('DOMContentLoaded', () => {

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const dogName = event.target.dog_name.value;
    const dogBreed = event.target.dog_breed.value;
    const dateBookedUntil = event.target.date.value;

    const dogDetails = `${dogName} the ${dogBreed} is booked in kennels until ${dateBookedUntil}!`;

    const bookedList = document.querySelector('.booked-list');
    const newListItem = document.createElement('li');
    bookedList.appendChild(newListItem);
    newListItem.classList.add('dog-booked');
    newListItem.textContent = dogDetails;

    event.target.reset()
  };

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);

});
