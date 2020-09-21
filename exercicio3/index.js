var nomes = ["Diego", "Gabriel", "Lucas"];

var ulElement = document.createElement('ul');
    for(var nome of nomes){
        var liElement = document.createElement('li')
        var textNode = document.createTextNode(nome);
        liElement.appendChild(textNode);
        ulElement.appendChild(liElement);
    }

var divElement = document.querySelector('#app');
divElement.appendChild(ulElement);





    