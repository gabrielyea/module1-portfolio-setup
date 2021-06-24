export const email = document.getElementById('email');
export const formRef = document.querySelector('form');

const errorMsg = document.getElementById('myPopup');
const subBtn = document.getElementById('sub-btn');
const messages = ['No caps allowed!!', 'Write a valid email please!', 'Remeber to use a valid domain!!',
  'NO CAAAPS!!', 'Maybe you are missing .com?'];

const pickRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];

export const isValidMail = () => {
  if (/[A-Z]/g.test(email.value) || email.validity.typeMismatch) {
    subBtn.classList.add('disable');
    errorMsg.classList.add('show');
    errorMsg.innerText = pickRandomMessage();
    subBtn.disabled = true;
    return false;
  }
  subBtn.classList.remove('disable');
  errorMsg.classList.remove('show');
  subBtn.disabled = false;
  return true;
};
