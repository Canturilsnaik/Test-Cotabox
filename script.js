const $form = document.querySelector('.form'),
      $error = $form.querySelector('.error'),
      $firstName = document.getElementById('first-name'),
      $lastName = document.getElementById('last-name'),
      $participation = document.getElementById('participation');

$form.addEventListener("submit", (e) => {
  e.preventDefault()

  checkInput();
})

function checkInput(){
  const firstNameValue = $firstName.value.trim(),
        lastNameValue = $lastName.value.trim(),
        participationValue = $participation.value.trim();

        if(firstNameValue === ''){
          setErrorFor($firstName, "First name cannot be blank")
        }

        if(lastNameValue === ''){
          setErrorFor($lastName, "Last name cannot be blank")
        }

        if(participationValue === ''){
          setErrorFor($participation, "Participation cannot be blank")
        }
      }


function setErrorFor(input, message){
  const formControl = input.parentElement,
        small = formControl.querySelector('small');

  small.innerText = message;
  small.style.opacity = '1';
}