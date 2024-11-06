document.addEventListener('DOMContentLoaded', function() {
    // Adicione event listeners para cada opção de livro
    var book1 = document.getElementById('book1');
    book1.addEventListener('click', function() {
        // Implemente a ação desejada quando o livro 1 é clicado
        console.log('Book 1 clicked');
    });

    var book2 = document.getElementById('book2');
    book2.addEventListener('click', function() {
        // Implemente a ação desejada quando o livro 2 é clicado
        
        console.log('Book 2 clicked');
    });document.addEventListener('DOMContentLoaded', function() {
    // Adicione event listeners para cada opção de livro

    var book1 = document.getElementById('book1');
    book1.addEventListener('click', function() {
        // Redirecione para a página com as opções quando o livro 1 é clicado
        window.location.href = 'pagina3.html';
    });

    var book2 = document.getElementById('book2');
    book2.addEventListener('click', function() {
        // Redirecione para a página com as opções quando o livro 2 é clicado
        window.location.href = 'pagina_opcoes.html?livro=2';
    });

    // Adicione event listeners para outros livros conforme necessário
});


    // Adicione event listeners para outros livros conforme necessário
});

function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }
