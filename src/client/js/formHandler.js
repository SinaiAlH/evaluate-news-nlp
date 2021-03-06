import { urlChecker } from "./urlChecker";

const submitHandler = document.getElementById('submit');

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (urlChecker(formText) === false) {

        alert('Please enter an url.');

        // Discontinue if the above if statement is true

        return;
    }

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8080/test?text=${formText}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `
        Agreement: ${res.agreement},
        Subjectivity: ${res.subjectivity},
        Confidence: ${res.confidence},
        Score tag: ${res.score_tag},
        Irony: ${res.irony}
        `;
    })
}

submitHandler.addEventListener('click', handleSubmit);

export { handleSubmit }
