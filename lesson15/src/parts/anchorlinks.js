function anchor() {
    let anchorlinks = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let hashval = item.getAttribute('href');
            let target = document.querySelector(hashval);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

module.exports = anchor;