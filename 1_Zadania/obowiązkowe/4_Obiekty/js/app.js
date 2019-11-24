//Zadanie 0a
var city = {
    capital: "San Escobra",
    population: 1234,
    president: "Dr No",
    primeMinistres: ["Bolek", "Lolek", "Papa Smerf"]
}

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinistres);


//Zadanie 0b

var timeMachine = {
    shape: "kwadrat",
    model: "najnowyszy",
    run: function(date, place){
        console.log("Przenoszę się do" + date + " w" + place)
    }
}
console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("1997", "Bieszczady");


//Zadanie 1
var book = {
    title: "Harry Potter",
    author: "J.K.Rowling",
    numberOfPages: 328,
}

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

//Zadnie 2
var person = {
    name: "Ala",
    age: 22,
    sayHello: function(){
        console.log("hello")
    }
}

console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3
var recipe = {
    title: "Babeczki",
    servings: 45,
}

recipe.ingredients = ["mąka", "jajka"]
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);


//Zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);

//Zadanie 0 - obiekty
var car = {
    brand = "Audi",
    color = "black",
    numerOfKilometers: 0
}

car.printCarinfo = function(){
    console.log(this.brand + " " + this.color + " " + this.numerOfKilometers);

car.drive = function(km){
    return this.numerOfKilometers += km;
    }
}

car.printCarinfo();
car.drive(20);
car.printCarinfo();

//Zadanie 1
car.list = ['2019-01-02'];

car.display(data)= function(){
    return this.list;
}

car.add('2019-01-03');
console.log(car.display());