sayHello();

function sayHello(){
    console.log("Cześć");
}

sayHello();


say(); // nie działa
var say = function(){
    console.log("Witaj");
}
say();