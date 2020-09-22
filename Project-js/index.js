var ulElement = document.createElement('ul');
var liElement = document.createElement('li');
var removeElement = document.createElement('button');
removeElement.setAttribute('value','Remove');
removeElement.setAttribute('class','remove');

var buttonElement = document.querySelector('.button');
buttonElement.onclick = function addTodo() {
    var inputElement = document.querySelector('.input');
    var liText = document.createTextNode(inputElement.value);

    liElement.appendChild(liText);
    liElement.appendChild(removeElement);
    ulElement.appendChild(liElement);
    
}

removeElement.onclick = function removeTodo(){
    ulElement.removeChild(liElement);
}

var divElement = document.querySelector('#list');
divElement.appendChild(ulElement);


