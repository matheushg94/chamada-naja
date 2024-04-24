const formRemover = document.querySelector('#form-remover');

formRemover.addEventListener('submit', () => {
    const nome = document.querySelector('#nome').value;
    const listaAlunos = JSON.parse(localStorage.getItem('lista'));

    
})