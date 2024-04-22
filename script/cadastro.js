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

const saveAluno = (nome, turma) => {
    localStorage.setItem(nome, turma);
}

formCadastro.addEventListener('submit', e => {
    e.preventDefault();

    const nome = formCadastro.querySelector('#nome').value;
    const turmas = formCadastro.querySelectorAll("[name='turma']");

    if (checkNome(nome) && checkTurma(turmas)) {
        let turmaEscolhida;
        turmas.forEach(turma => {
            if (turma.checked === true) {
                turmaEscolhida = turma.value;
            }
        })
        console.log(`Nome: ${nome} - Turma: ${turmaEscolhida}`);
        saveAluno(nome, turmaEscolhida);
        document.location = 'pages/success.html';
    }
});
