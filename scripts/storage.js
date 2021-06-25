const formData = document.querySelector('form');

export const saveInputData = () => {
  const data = {
    sName: formData.name.value,
    sMail: formData.email.value,
    sText: formData.tarea.value,
  };
  localStorage.setItem('userForm', JSON.stringify(data));
};

export const loadInputData = () => {
  if (localStorage.getItem('userForm') !== null) {
    const loadedData = JSON.parse(localStorage.getItem('userForm'));
    formData.name.value = loadedData.sName;
    formData.email.value = loadedData.sMail;
    formData.tarea.value = loadedData.sText;
  } else {
    formData.name.value = '';
    formData.email.value = '';
    formData.tarea.value = '';
  }
};