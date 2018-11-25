function myFirstApp(name, age){
    alert(`Привет, меня зовут ${name} и это моя первая программа`);

    function showSkills() {
        let skills = ['html', 'css', 'ruby', 'RoR', 'js', 'git'];

        for (let i = 0; i < skills.length; i++) {
            document.writeln(`Я владею ${skills[i]} <br/>`);            
        }
    }
    showSkills();

    function checkAge() {
        if (age > 18){
            alert("Вперед покорять мир веб-разработки!");
        } else {
            alert("Учись и потом будешь покорять мир веб-разработки!");
        }
    }
    checkAge();

    function calcPow(num) {
        console.log(num *= num);
    }
    calcPow(4);

}

myFirstApp("Anton", 21);