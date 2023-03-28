const loginForm = document.querySelector('.login-form');

const handleFormSubmit = (event) => {
  event.preventDefault();

  const emailInput = event.currentTarget.elements.email;
  const passwordInput = event.currentTarget.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert('Заповніть всі поля!');
    return;
  }

  const userData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(userData);

  event.currentTarget.reset();
};

loginForm.addEventListener('submit', handleFormSubmit);
