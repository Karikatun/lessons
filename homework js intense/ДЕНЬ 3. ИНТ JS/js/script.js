window.addEventListener('DOMContentLoaded', function(){

    let products = document.querySelectorAll('.product'),
        buttons = document.getElementsByTagName('button'),
        open = document.getElementsByClassName('open')[0];
    

    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            close = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        close.classList.add('close');

        close.textContent = 'Закрыть';
        heading.textContent = 'В нашей корзине: ';

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(close);
    }
    createCart();

    let field = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            let item = products[i].cloneNode(true),
                btnClose = document.createElement('button'),
                btn = item.querySelector('button');                


            btnClose.classList.add('closeBtn');
            btnClose.textContent = 'Удалить';
            btn.remove();
            field.appendChild(item);
            item.appendChild(btnClose);
            products[i].remove();            
        });        
    }
    

    function openCart() {
        cart.style.display = 'block';   
        let btnClose = document.querySelectorAll('.closeBtn');

        for (let i = 0; i < btnClose.length; i++){     
            let item = cart.querySelectorAll('.product');       
            btnClose[i].addEventListener('click', function(){
                item[i].remove(); 
            });
        }         
        console.log(btnClose);    
    }
    function closeCart(){
        cart.style.display = 'none';
    }

    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);


});