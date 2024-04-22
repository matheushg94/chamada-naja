const formVisualizar = document.querySelector('#form-visualizar');

const createTable = (turma) => {
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

    const listaAlunos = JSON.parse(localStorage.getItem('lista'));
        listaAlunos.forEach(aluno => {
            if (aluno.turma === turma) {
                const row = document.createElement('tr');
                const num = document.createElement('td');
                num.innerText = `1`;
                const nome = document.createElement('td');
                nome.innerText = `${aluno.nome}`;
                const dias = document.createElement('td');
                dias.innerText = `${aluno.turma}`;
                row.appendChild(num);
                row.appendChild(nome);
                row.appendChild(dias);
                tb.appendChild(row);
            }
        });

    return tb;
}

formVisualizar.addEventListener('submit', e => {
    e.preventDefault();

    const turmaEscolhida = document.querySelector('#turma-escolhida').value;
    const chamada = document.querySelector('.chamada');

    chamada.innerHTML = '';

    chamada.appendChild(createTable(turmaEscolhida));
})