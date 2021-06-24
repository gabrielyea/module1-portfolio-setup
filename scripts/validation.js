export const email = document.getElementById('email');
export const formRef = document.querySelector('form');

const errorMsg = document.getElementById('myPopup');
// const subBtn = document.getElementById('sub-btn');
const messages = ['No caps allowed!!', 'NO CAAAPS ON EMAIL!!', 'Please use lower case letters.'];

export const pickRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];

export const isValidMail = () => {
  if (/[A-Z]/g.test(email.value) || email.validity.typeMismatch) {
    // subBtn.classList.add('disable');
    // subBtn.disabled = true;
    return false;
  }
  // subBtn.classList.remove('disable');
  // subBtn.disabled = false;
  errorMsg.classList.remove('show');
  return true;
};

export const displayError = () => {
  errorMsg.classList.add('show');
  errorMsg.innerText = pickRandomMessage();
};