const emailReceiver = "keenanpermana16@gmail.com";

function showAlert(message) {
  alert(message);
}

function sendMail(event) {
  event.preventDefault();

  const inputs = ["name", "email", "phone", "subject", "message"];
  const values = {};

  for (const inputName of inputs) {
    const inputValue = document.getElementById(inputName).value;
    values[inputName] = inputValue;

    if (!inputValue) {
      showAlert(
        `Please enter your ${inputName.replace(/^\w/, (c) => c.toUpperCase())}`
      );
      return;
    }
  }

  const mailtoLink = `mailto:${emailReceiver}?subject=${values.subject}&body=Name:${values.name}%0D%0AEmail:${values.email}%0D%0APhone:${values.phone}%0D%0A%0D%0A${values.message}`;
  const createA = document.createElement("a");

  createA.href = mailtoLink;
  createA.click();
}