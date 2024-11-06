document.addEventListener('DOMContentLoaded', function() {
    // Adicione event listener para o clique no livro 1
    var book1 = document.getElementById('book1');
    book1.addEventListener('click', function() {
        // Redirecione para a página com as opções quando o livro 1 é clicado
        window.location.href = 'pagina2.html';
    });

    // Adicione event listener para o clique no livro 2
    var book2 = document.getElementById('book2');
    book2.addEventListener('click', function() {
        // Abra uma nova janela com a página de opções quando o livro 2 é clicado
        window.open('pagina3?livro=2', '_blank');
    });

    // Adicione event listeners para outros livros conforme necessário
});

