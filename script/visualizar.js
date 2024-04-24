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

const getListaDeDias = (turma) => {
    const {diaNumero, diaDaSemana} = getDate(turma);
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
    const listaDeDias = getListaDeDias(turma);
    listaDeDias.forEach(dia => {
        const celulaDia = document.createElement('th');
        if (dia <= 31) {
            celulaDia.innerText = dia;
        } else {
            celulaDia.innerText = ' ';
        }
        headerRow.appendChild(celulaDia);
    })
    tb.appendChild(headerRow);

    const listaAlunosTotal = JSON.parse(localStorage.getItem('lista'));
    const listaAlunos = listaAlunosTotal.filter(aluno => aluno.turma === turma);

    listaAlunos.forEach((aluno, i) => {
        const row = document.createElement('tr');
        const num = document.createElement('td');
        num.innerText = i + 1;
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
    });

    return tb;
}

formVisualizar.addEventListener('submit', e => {
    e.preventDefault();

    const turmas = formVisualizar.querySelectorAll("[name='turma']");
    let turmaEscolhida;
    turmas.forEach(turma => {
        if (turma.checked === true) {
            turmaEscolhida = turma.value;
        }
    })
    // const turmaEscolhida = document.querySelector('#turma-escolhida').value;

    const chamada = document.querySelector('.chamada');
    chamada.innerHTML = '';
    chamada.appendChild(createTable(turmaEscolhida));
})