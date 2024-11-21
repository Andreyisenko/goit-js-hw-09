const formS = document.querySelector('.feedback-form');
const btn = document.querySelector('button');
const textArea = formS.querySelector('textarea');
const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';
formS.addEventListener('input', handleInput);
function handleInput(event) {
  formData.email = event.currentTarget.email.value.trim();
  formData.message = event.currentTarget.message.value.trim();
  //   const data = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
populateText();

function populateText() {
  const messeg = localStorage.getItem(STORAGE_KEY);
  if (messeg === null) {
    return;
  }
  if (JSON.parse(messeg).message || JSON.parse(messeg).email) {
    textArea.value = JSON.parse(messeg).message;
    formS.email.value = JSON.parse(messeg).email;
  }
}

formS.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (
    formS.email.value.trim() === ''.trim() ||
    textArea.value.trim() === ''.trim()
  ) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
