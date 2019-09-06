document.addEventListener('DOMContentLoaded', () => {

  const handleFormSubmit = function (event) {
    event.preventDefault();
    const dogName = event.target.dog_name.value;
    const dogBreed = event.target.dog_breed.value;
    const dateBookedUntil = event.target.date.value;
    console.log(`${dogName} the ${dogBreed} is booked in kennels until ${dateBookedUntil}!`);
  };

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);

});
