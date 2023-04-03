const form = document.querySelector('#checkout-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Retrieve form data
  const fullName = document.querySelector('#full-name').value;
  const email = document.querySelector('#email').value;
  const address = document.querySelector('#address').value;
  const city = document.querySelector('#city').value;
  const state = document.querySelector('#state').value;
  const zipCode = document.querySelector('#zip-code').value;
  const cardName = document.querySelector('#card-name').value;
  const cardNumber = document.querySelector('#card-number').value;
  const expMonth = document.querySelector('#exp-month').value;
  const expYear = document.querySelector('#exp-year').value;
  const cvv = document.querySelector('#cvv').value;

  // Create display element
  const displayData = document.querySelector('#display-data');
  const data = `
    <p>Full Name        : ${fullName}</p><br>
    <p>Email            : ${email}</p><br>
    <p>Address          : ${address}</p><br>
    <p>City             : ${city}</p><br>
    <p>State            : ${state}</p><br>
    <p>Zip Code         : ${zipCode}</p><br>
    <p>Card Name        : ${cardName}</p><br>
    <p>Card Number      : ${cardNumber}</p><br>
    <p>Expiration Month : ${expMonth}</p><br>
    <p>Expiration Year  : ${expYear}</p><br>
    <p>CVV              : ${cvv}</p>
  `;
  displayData.innerHTML = data;

  // Clear form inputs
  //  document.querySelector('#full-name').value = '';
  //  document.querySelector('#email').value = '';
  //  document.querySelector('#address').value = '';
  //  document.querySelector('#city').value = '';
  //  document.querySelector('#state').value = '';
  //  document.querySelector('#zip-code').value = '';
  //  document.querySelector('#card-name').value = '';
  //  document.querySelector('#card-number').value = '';
  //  document.querySelector('#exp-month').value = '';
  //  document.querySelector('#exp-year').value = '';
  //  document.querySelector('#cvv').value = '';

  form.reset();
});


const openDialogButton = document.querySelector('#open-dialog-button');
const closeDialogButton = document.querySelector('#close-dialog-button');
const dialogBox = document.querySelector('#dialog-box');

openDialogButton.addEventListener('click', () => {
  dialogBox.style.display = 'block';
});

closeDialogButton.addEventListener('click', () => {
  dialogBox.style.display = 'none';
});
