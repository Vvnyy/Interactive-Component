let mainDiv = document.querySelector("#main--div");
let hiddenDiv = document.querySelector("#hidden--div");
const submit = document.querySelector("#submit");
let numbers = document.querySelectorAll(".btn");
let result = document.querySelector("#result");

numbers.forEach(mainDiv => {
    mainDiv.addEventListener('click', () =>{
        result.innerHTML = mainDiv.value;
    });
});

function thanks(event){
    mainDiv.classList.toggle("hidden");
    hiddenDiv.classList.toggle("hidden");
}