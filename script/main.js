const formCadastro = document.querySelector('#form-cadastro');

const checkNome = nome => {
    if (nome === '') {
        teste.innerHTML = 'Digite o nome do aluno.';
        return false;
    }
    return true;
}

const checkTurma = turmas => {
    turmas.forEach(turma => {
        if (turma.checked === true) {
            return true;
        }
    });
    teste.innerHTML = 'Selecione uma turma.';
    return false;
}

const saveAluno = (nome, turma) => {
    localStorage.setItem(nome, turma);
}

formCadastro.addEventListener('submit', e => {
    e.preventDefault();

    const nome = formCadastro.querySelector('#nome').value;
    const turmas = formCadastro.querySelectorAll("[name='turma']");
    const teste = document.querySelector('#teste');

    if (checkNome(nome) && checkTurma(turmas)) {
        teste.innerHTML = 'Sucesso!'
        let turmaEscolhida;
        turmas.forEach(turma => {
            if (turma.checked === true) {
                turmaEscolhida = turma.value;
            }
        })

        saveAluno(nome, turmaEscolhida);
    }  
});


