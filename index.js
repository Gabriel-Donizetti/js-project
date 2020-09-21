var botaoElement = document.querySelector('#botao')
botaoElement.onclick = function () {
        var divElement = document.createElement("div");
        divElement.style.width = 100;
        divElement.style.height = 100;
        divElement.style.backgroundColor = '#000';
        divElement.setAttribute('id', 'square');
        divElement.onmouseover = trocaCor;

        var containerElement = document.querySelector('.squares');
        containerElement.appendChild(divElement);
    
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function trocaCor() {
    if (document.querySelector('#square') != null) {
        var squareElemente = document.querySelectorAll('.squares > #square');
        for (var square of squareElemente) {
            square.style.backgroundColor = getRandomColor();

        }
        //  squareElemente.style.backgroundColor = getRandomColor();
    }
  
}