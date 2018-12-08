function description() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showTab() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', showTab);

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });

    let descrBtn = document.querySelectorAll('.description-btn');

    for (let i = 0; i < descrBtn.length; i++) {
        descrBtn[i].addEventListener('click', showTab);
    }
}

module.exports = description;