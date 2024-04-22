const formCadastro = document.querySelector('#form-cadastro');

const checkNome = nome => {
    if (nome === '') {
        return false;
    }
    return true;
}

const checkTurma = turmas => {
    let isTurmaChecked = false;
    turmas.forEach(turma => {
        if (turma.checked === true) {
            isTurmaChecked = true;
        }
    });
    return isTurmaChecked;
}

const saveAluno = (nome, turma, lista) => {
    let aluno = {
        nome,
        turma
    }

    lista.push(aluno);

    localStorage.setItem('lista', JSON.stringify(lista));
}

formCadastro.addEventListener('submit', e => {
    e.preventDefault();

    const nome = formCadastro.querySelector('#nome').value;
    const turmas = formCadastro.querySelectorAll("[name='turma']");
    let listaAlunos = JSON.parse(localStorage.getItem('lista')) || [];

    if (checkNome(nome) && checkTurma(turmas)) {
        let turmaEscolhida;
        turmas.forEach(turma => {
            if (turma.checked === true) {
                turmaEscolhida = turma.value;
            }
        })
        saveAluno(nome, turmaEscolhida, listaAlunos);
        document.location = 'pages/success.html';
    }
});
