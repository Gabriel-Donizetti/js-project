var buttonElement = document.querySelector('#button');
var inputElement = document.querySelector('#input');

buttonElement.onclick = function createTask(){
    var liElement = document.createElement('li');
    liElement.style.textDecoration = none;
    var text = document.createTextNode(inputElement.value);

    liElement.appendChild(text);
    console.log(text);
    var divElement = document.querySelector('#content');
    divElement.appendChild(liElement);
    console.log(divElement);

    inputElement.value = '';
}