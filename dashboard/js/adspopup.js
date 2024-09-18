document.addEventListener('DOMContentLoaded', (event) => {
    const createBtn = document.querySelector('.create');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');

    createBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
