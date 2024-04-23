const formVisualizar = document.querySelector('#form-visualizar');

const getDate = (turma) => {
    const todayDate = new Date();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();
    let diaNumero;
    let diaDaSemana;
        
    for (let i = 1; i < 8; i++) {
        const date = new Date(year, month, i);
        const weekDay = date.getDay();
        const monthDay = date.getDate();

        if (turma.toLowerCase().startsWith('seg')) {
            if (weekDay === 1) {
                diaNumero = monthDay;
                diaDaSemana = 'segunda';
                break;
            }
            if (weekDay === 3) {
                diaNumero = monthDay;
                diaDaSemana = 'quarta';
                break;
            }
        } else {
            if (weekDay === 2) {
                diaNumero = monthDay;
                diaDaSemana = 'terça';
                break;
            }
            if (weekDay === 4) {
                diaNumero = monthDay;
                diaDaSemana = 'quinta';
                break;
            }
        }
    }

    return {diaNumero, diaDaSemana}
}

const getListaDeDias = (diaNumero, diaDaSemana) => {
    let lista = [diaNumero];
    let contador = diaNumero;

    switch (diaDaSemana) {
        case 'segunda':
            for (let i = 0; i < 9; i++) {
                if (i % 2 === 0) {
                    contador+= 2;
                    lista.push(contador)
                } else {
                    contador+= 5;
                    lista.push(contador);
                }
            }
            break;

        case 'terça':
            for (let i = 0; i < 9; i++) {
                if (i % 2 === 0) {
                    contador+= 2;
                    lista.push(contador)
                } else {
                    contador+= 5;
                    lista.push(contador);
                }
            }
            break;

        case 'quarta':
            for (let i = 0; i < 9; i++) {
                if (i % 2 === 0) {
                    contador+= 5;
                    lista.push(contador)
                } else {
                    contador+= 2;
                    lista.push(contador);
                }
            }
            break;

        case 'quinta':
            for (let i = 0; i < 9; i++) {
                if (i % 2 === 0) {
                    contador+= 5;
                    lista.push(contador)
                } else {
                    contador+= 2;
                    lista.push(contador);
                }
            }
            break;
    
        default:
            break;
    }

    return lista;
}

const createTable = (turma) => {
    const tb = document.createElement('table');
    const headerRow = document.createElement('tr');
    const thNumero = document.createElement('th');
    thNumero.innerText = 'N°';
    const thNome = document.createElement('th');
    thNome.innerText = 'NOME';
    headerRow.appendChild(thNumero);
    headerRow.appendChild(thNome);
    
    const {diaNumero, diaDaSemana} = getDate(turma);
    const listaDeDias = getListaDeDias(diaNumero, diaDaSemana);
    listaDeDias.forEach(dia => {
        const celulaDia = document.createElement('th');
        celulaDia.innerText = dia;
        headerRow.appendChild(celulaDia);
    })

    tb.appendChild(headerRow);


    const listaAlunos = JSON.parse(localStorage.getItem('lista'));
        listaAlunos.forEach(aluno => {
            if (aluno.turma === turma) {
                const row = document.createElement('tr');
                const num = document.createElement('td');
                num.innerText = `1`;
                const nome = document.createElement('td');
                nome.innerText = `${aluno.nome}`;
                row.appendChild(num);
                row.appendChild(nome);
                listaDeDias.forEach(dia => {
                    const blankCell = document.createElement('td');
                    blankCell.innerText = ' ';
                    row.appendChild(blankCell);
                })
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