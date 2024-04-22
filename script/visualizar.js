const formVisualizar = document.querySelector('#form-visualizar');

const createTable = () => {
    const tb = document.createElement('table');
    const headerRow = document.createElement('tr');
    const numero = document.createElement('th');
    numero.innerText = 'n°';
    const nome = document.createElement('th');
    nome.innerText = 'NOME';
    const dias = document.createElement('th');
    dias.innerText = 'DIAS';
    headerRow.appendChild(numero);
    headerRow.appendChild(nome);
    headerRow.appendChild(dias);
    tb.appendChild(headerRow);

    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.innerText = 'teste';
    row.appendChild(cell);
    row.appendChild(cell);
    row.appendChild(cell);
    tb.appendChild(row);

    return tb;
}

formVisualizar.addEventListener('submit', e => {
    e.preventDefault();

    const turmaEscolhida = document.querySelector('#turma-escolhida').value;
    const chamada = document.querySelector('.chamada');

    chamada.appendChild(createTable());
})