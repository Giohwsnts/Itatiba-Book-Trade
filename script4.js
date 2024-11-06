// Referencia os elementos do DOM
const userNameInput = document.getElementById('user-name');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');
const postImageInput = document.getElementById('post-image');
const createPostBtn = document.getElementById('create-post');
const postsContainer = document.getElementById('posts');

// Carrega os posts salvos no localStorage ao iniciar a página
document.addEventListener('DOMContentLoaded', loadPosts);

// Função para criar e exibir um novo post
createPostBtn.addEventListener('click', function () {
    const userName = userNameInput.value;
    const title = postTitleInput.value;
    const content = postContentInput.value;
    const imageFile = postImageInput.files[0];

    if (userName && title && content) {
        const post = {
            userName: userName,
            title: title,
            content: content,
            image: null
        };

        // Se houver uma imagem, converte-a para base64
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                post.image = e.target.result;
                savePost(post); // Salva o post no localStorage após a imagem ser carregada
                renderPost(post);
            };
            reader.readAsDataURL(imageFile);
        } else {
            savePost(post); // Salva o post no localStorage sem imagem
            renderPost(post);
        }

        // Limpa os campos após criar o post
        userNameInput.value = '';
        postTitleInput.value = '';
        postContentInput.value = '';
        postImageInput.value = '';
    } else {
        alert('Por favor, preencha o nome, o título e o conteúdo do post.');
    }
});

// Função para salvar o post no localStorage
function savePost(post) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Função para carregar os posts salvos no localStorage e renderizá-los na página
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => renderPost(post));
}

// Função para renderizar um post na página
function renderPost(post) {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');

    const postUserName = document.createElement('h4');
    postUserName.textContent = `Por: ${post.userName}`;
    
    const postTitleElement = document.createElement('h3');
    postTitleElement.textContent = post.title;

    const postContentElement = document.createElement('p');
    postContentElement.textContent = post.content;

    postContainer.appendChild(postUserName);
    postContainer.appendChild(postTitleElement);
    postContainer.appendChild(postContentElement);

    // Exibe a imagem, se existir
    if (post.image) {
        const postImage = document.createElement('img');
        postImage.src = post.image;
        postImage.style.maxWidth = '300px';
        postImage.style.marginTop = '10px';
        postContainer.appendChild(postImage);
    }

    postsContainer.appendChild(postContainer);
}

// Redireciona para a página "Home" ao clicar no botão "Voltar para Home"
document.getElementById('back-home').addEventListener('click', function () {
    window.location.href = 'pagina2.html'; // Insira o caminho correto para a página "Home"
});
