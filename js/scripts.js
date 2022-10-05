// FORM SUBMISSION
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    var innerForm = document.getElementById("inner-form");
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
            status.style.display = "block";
            innerForm.style.display = "none";
        } else {
            response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
                status.innerHTML = "Oops! There was a problem submitting your form"
            }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)


// BACK TO TOP BUTTON
let mybutton = document.getElementById("back-to-top");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
    // mybutton.style.display = "flex";
    mybutton.style.opacity = "1";
  } else {
    // mybutton.style.display = "none";
    mybutton.style.opacity = "0";
  }
}