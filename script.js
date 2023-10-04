const inputCheck = document.querySelector('input[type="checkbox"]')
const elemento = document.querySelector('#body')

inputCheck.addEventListener('click', (evento) => {
    myFunction()
})

function myFunction() {
    if (inputCheck.checked == true) {      
        elemento.setAttribute("data-bs-theme", "dark");
      } else {
        elemento.setAttribute("data-bs-theme", "light");
      }
  }