export const email = document.getElementById('email');
export const formRef = document.querySelector('form');

const errorMsg = document.getElementById('myPopup');
// const subBtn = document.getElementById('sub-btn');
const capsMsg = ['No caps allowed!!', 'NO CAAAPS ON EMAIL!!', 'Please use lower case letters.'];
const invalidMailMsg = ['Invalid mail format', 'Need @ or .com'];

export const pickRandomMessage = (msg) => msg[Math.floor(Math.random() * msg.length)];

export const displayError = (msg) => {
  errorMsg.classList.add('show');
  errorMsg.innerText = pickRandomMessage(msg);
};

export const isValidMail = () => {
  if (/[A-Z]/g.test(email.value)) {
    displayError(capsMsg);
    return false;
  } if (email.validity.typeMismatch) {
    displayError(invalidMailMsg);
    return false;
  }
  errorMsg.classList.remove('show');
  return true;
};
