const formRemover = document.querySelector('#form-remover');

const removeAluno = (nome) => {
    const listaAlunos = JSON.parse(localStorage.getItem('lista'));
    let removido = false;

    listaAlunos.forEach((aluno, i) => {
        if (aluno.nome === nome) {
            listaAlunos.splice(i, 1);
            removido = true;
        }
    });

    if (removido) {
        msg.innerText = 'Aluno removido.';
    } else {
        msg.innerText = 'Aluno não encontrado.';
    }

    localStorage.setItem('lista', JSON.stringify(listaAlunos));
}

formRemover.addEventListener('submit', e => {
    e.preventDefault();

    const nome = document.querySelector('#nome').value;
    const msg = document.querySelector('#msg');

    msg.innerText = '';

    removeAluno(nome);
});