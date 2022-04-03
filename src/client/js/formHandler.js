import { checkForName } from "./nameChecker";

const submitHandler = document.getElementById('submit');

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText);

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8080/test?text=${formText}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.agreement;
    })
}

submitHandler.addEventListener('click', handleSubmit);

export { handleSubmit }
