function form() {
    let form = document.querySelectorAll('.main-form, #form');

    form.forEach(function (form) {
        let message = {
            loading: 'Загрузка...',
            succsess: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так...'
        };

        let input = form.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
        statusMessage.classList.add('status', 'fade');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form),
                obj = {};

            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            function postData(data) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(data);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
                setTimeout(function () {
                    statusMessage.innerHTML = '';
                }, 3000);
            }
            
            postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.succsess)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);

        });
    });



    let validate = (input, regex) => {
        let value = input.value;
        input.addEventListener('input', function (e) {
            let newValue = e.target.value;
            if (newValue.match(regex)) {
                input.value = value;
                return;
            }
            value = newValue;
        });
    };

    let telInput = document.querySelectorAll('input[type="tel"]');
    telInput.forEach(function (input) {
        let len = 0;

        validate(input, /[^+()\d-]/);

        input.addEventListener('click', () => {
            input.value = "+";
        });

        input.addEventListener('blur', () => {
            if (input.value.length < 3) {
                input.value = "";
            }
        });

        input.addEventListener('keydown', () => {
            let curLen = input.value.length;

            if (curLen < len) {
                len--;
                return;
            }

            if (curLen == 2) input.value = input.value + "(";
            if (curLen == 6) input.value = input.value + ")-";
            if (curLen == 11) input.value = input.value + "-";
            if (curLen == 14) input.value = input.value + "-";
            if (curLen > 16) input.value = input.value.substring(0, input.value.length - 1);
            len++;
        });
    });
}

module.exports = form;