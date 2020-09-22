
var buttonElement = document.querySelector('.button');
buttonElement.onclick = function addTodo() {
    var inputElement = document.querySelector('.input');
    var text = inputElement.value;
    console.log(text);
}