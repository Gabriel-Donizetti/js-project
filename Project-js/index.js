var ulElement = document.createElement('ul');
var removeElement = document.createElement('button');
removeElement.setAttribute('value','Remove');
removeElement.setAttribute('class','remove');

var buttonElement = document.querySelector('.button');
buttonElement.onclick = function addTodo() {
    var inputElement = document.querySelector('.input');
    var liElement = document.createElement('li');
    var liText = document.createTextNode(inputElement.value);

    liElement.appendChild(liText);
    liElement.appendChild(removeElement);
    ulElement.appendChild(liElement);
    
}

var divElement = document.querySelector('#list');
divElement.appendChild(ulElement);


// var botaoElement = document.querySelector('#botao');
// var ulElement = document.createElement('ul');

// botaoElement.onclick = function createText(){
//     var inputElment = document.querySelector('#input');
//     //var inputValue = inputElment.value;
//     var liElement = document.createElement('li');
//     var liText = document.createTextNode(inputElment.value)
//     liElement.appendChild(liText);
//     ulElement.appendChild(liElement);

// }

// var divElement = document.querySelector('#app');
// divElement.appendChild(ulElement);
