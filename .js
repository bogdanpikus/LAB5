// JavaScript source code
var foo = 'Michael'
var bar = foo;

alert(bar);


for (let i = 1; i <= 10; i++) {
    document.write(bar + ' ' + i + '<br>');
}

function over() {
    document.getElementById("b1").innerHTML = "DOOOONT!!";
}


function change() {
    document.querySelector('#string').textContent = this.value;
}
