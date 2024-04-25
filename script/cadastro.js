const formCadastro = document.querySelector('#form-cadastro');

const checkNome = nome => {
    if (nome === '') {
        msg.innerText = 'Digite o nome do(a) aluno(a).'
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
    isTurmaChecked ? msg.innerText = '' : msg.innerText = 'Escolha uma turma.';
    return isTurmaChecked;
}

const alunoRepetido = (nome, listaAlunos) => {
    let repetido = false;

    listaAlunos.forEach(aluno => {
        if (nome === aluno.nome) {
            repetido = true;
            msg.innerText = 'Aluno(a) já está cadastrado(a).'
        }
    });

    return repetido;
}

const saveAluno = (nome, turma, listaAlunos) => {
    let aluno = {
        nome,
        turma
    }

    listaAlunos.push(aluno);

    localStorage.setItem('lista', JSON.stringify(listaAlunos));

    msg.innerText = 'Aluno(a) cadastrado(a) com sucesso!'
}

formCadastro.addEventListener('submit', e => {
    e.preventDefault();

    const nome = formCadastro.querySelector('#nome').value;
    const turmas = formCadastro.querySelectorAll("[name='turma']");
    const msg = document.querySelector('#msg');
    let listaAlunos = JSON.parse(localStorage.getItem('lista')) || [];

    msg.innerText = '';

    if (checkNome(nome) && checkTurma(turmas) && !alunoRepetido(nome, listaAlunos)) {
        let turmaEscolhida;
        turmas.forEach(turma => {
            if (turma.checked === true) {
                turmaEscolhida = turma.value;
            }
        })
        saveAluno(nome, turmaEscolhida, listaAlunos);
    }
});
