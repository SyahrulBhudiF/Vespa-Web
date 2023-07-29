let activeColor = null;

document.querySelector('.color-select').addEventListener('click', (e) => {
    if (activeColor) {
        activeColor.classList.remove('active')
    }

    if (e.target.tagName === 'DIV') {
        const color = e.target.id;
        const image = document.querySelector('.img img');

        activeColor = e.target;

        image.classList.add('fade-out');


        e.target.classList.add('active')

        setTimeout(() => {

            image.classList.remove('fade-out');

            image.setAttribute('src', `img/${color}.png`);

        }, 500);
    }
});
