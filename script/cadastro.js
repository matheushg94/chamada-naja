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

const saveAluno = (nome, turma, listaAlunos) => {
    let aluno = {
        nome,
        turma
    }

    listaAlunos.push(aluno);

    localStorage.setItem('lista', JSON.stringify(listaAlunos));

    msg.innerText = 'Aluno cadastrado com sucesso!'
}

formCadastro.addEventListener('submit', e => {
    e.preventDefault();

    const nome = formCadastro.querySelector('#nome').value;
    const turmas = formCadastro.querySelectorAll("[name='turma']");
    const msg = document.querySelector('#msg');
    let listaAlunos = JSON.parse(localStorage.getItem('lista')) || [];

    if (checkNome(nome) && checkTurma(turmas)) {
        let turmaEscolhida;
        turmas.forEach(turma => {
            if (turma.checked === true) {
                turmaEscolhida = turma.value;
            }
        })
        saveAluno(nome, turmaEscolhida, listaAlunos);
    }
});
