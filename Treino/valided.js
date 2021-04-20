const forms = document.querySelectorAll("input[required]");

function customValidation(event) {
  const field = event.target;

  function customError() {
    let foundError = false;

    for (const error in field.validity) {
      if (error !== "customError" && field.validity[error]) {
        foundError = true;
      }
    }
    return foundError;
  }

  const error = customError();
  if(error) {
    field.setCustomValidity('Esse campo é obrigatório!')
  }else{
    field.setCustomValidity(' ')
  }
  
}

for (const field of forms) {
  field.addEventListener("invalid", customValidation);
}

document.querySelector("form").addEventListener("submit", (event) => {
  console.log("enviou formulário");
  event.preventDefault();
});
