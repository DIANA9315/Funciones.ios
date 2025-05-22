document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentText = document.getElementById('commentText');
    const commentsList = document.getElementById('commentsList');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional (recarga la página)

        const commentContent = commentText.value.trim(); // Obtiene el texto y elimina espacios en blanco al inicio/final

        if (commentContent) { // Asegura que el comentario no esté vacío
            addComment(commentContent);
            commentText.value = ''; // Limpia el campo de texto después de agregar el comentario
        }
    });

    function addComment(content) {
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');

        const commentParagraph = document.createElement('p');
        commentParagraph.classList.add('comment-text');
        commentParagraph.textContent = content;

        const commentMeta = document.createElement('div');
        commentMeta.classList.add('comment-meta');
        const now = new Date();
        const dateTimeString = now.toLocaleString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        commentMeta.textContent = `Publicado el ${dateTimeString}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            commentItem.remove(); // Elimina el elemento del comentario del DOM
        });

        commentItem.appendChild(commentParagraph);
        commentItem.appendChild(commentMeta);
        commentItem.appendChild(deleteButton);
        commentsList.prepend(commentItem); // Agrega el nuevo comentario al principio de la lista
    }
});