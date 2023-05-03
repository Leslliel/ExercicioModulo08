const form = document.getElementById('form-contato');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adcionaLinha();
    atualizaTabela();
});

function adcionaLinha() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    if (contatos.includes(nomeContato.value) || (numeros.includes(numeroContato.value))){
        alert(`O contato ${nomeContato.value} ou número ${numeroContato.value} já foi adicionado`)
    }else{
        contatos.push(nomeContato.value);
        numeros.push(numeroContato.value);
        
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td><a href="tel:${numeroContato.value}" title="Iniciar chamada">${numeroContato.value}</a></td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}