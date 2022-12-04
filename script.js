// 1.Class - Movie

// class Movie{
//     constructor(title, studio, rating) {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//     if(rating===undefined){
//     this.rating = "PG";}
//     }
//     get Movietitle() {
//         return this.title;
 
//     }
//     get Moviestudio() {
//         return this.studio;
 
//     }
//     get Movierating() {
//         return this.rating;
 
//     }
//     set Movietitle(title) {
//         this.title = title
// }
//     set Moviestudio(studio) {
//         this.studio = studio
//     }
//     set Movierating(rating) {
//         this.rating = rating
//     }
//     get Movieandrating(){
//         return `"Movie[title=${this.title},rating=${this.rating},studio=${this.studio}]"`;
//     }
// }
 
// var obj2 = new Movie("casino royalle","Eon productions","PG13")
// console.log(obj2);
// console.log(obj2.Movieandrating)
// var obj3 = new Movie("casino royalle","Eon productions",)
// console.log(obj3);
// console.log(obj3.Movieandrating);

// OUTPUT 
// Movie {title: 'casino royalle', studio: 'Eon productions', rating: 'PG13'}rating: "PG13"studio: "Eon productions"title: "casino royalle"Movieandrating: "\"Movie[title=casino royalle,rating=PG13,studio=Eon productions]\""Movierating: "PG13"Moviestudio: "Eon productions"Movietitle: "casino royalle"[[Prototype]]: ObjectMovieandrating: (...)Movierating: (...)Moviestudio: (...)Movietitle: (...)constructor: class Movieget Movieandrating: ƒ Movieandrating()get Movierating: ƒ Movierating()set Movierating: ƒ Movierating(rating)get Moviestudio: ƒ Moviestudio()set Moviestudio: ƒ Moviestudio(studio)get Movietitle: ƒ Movietitle()set Movietitle: ƒ Movietitle(title)[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// "Movie[title=casino royalle,rating=PG13,studio=Eon productions]"
// Movie {title: 'casino royalle', studio: 'Eon productions', rating: 'PG'}
// "Movie[title=casino royalle,rating=PG,studio=Eon productions]"

// 2. Class CIRCLE

// class circle{
//     constructor(radius, color) {
//     this.radius = radius;
//     this.color = color;
//     }
//     get radiuscircle(){
//         return this.radius
//     }
//     get colorcircle(){
//             return this.color
//     }
//     set radiuscircle(radius){
//             this.radius = radius
//         }
//         set colorcircle(color){
//             this.color = color
//         }
//         get toString(){
//             return `"circle[radius=${this.radius},color=${this.color}]"`;
//         }
//         get areacircle(){
//             return Math.PI * this.radius* this.radius ;
//         }
//         get circumferencecircle(){
//             return 2 * Math.PI * this.radius;
//         }
//     }
// var answer = new circle(5.0,"blue")
// console.log(answer.radiuscircle);
// console.log(answer.colorcircle);
// console.log(answer.toString);
// console.log(answer.areacircle);
// console.log(answer.circumferencecircle);

// OUTPUT

//  5
//  blue
//  "circle[radius=5,color=blue]"
// 78.53981633974483
// 31.41592653589793

//3. person class Details
// class Person {
//     constructor(firstName, lastName, age,occupation,role,gender,birth,place) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.occupation = occupation;
//     this.role = role;
//     this.gender = gender;
//     this.birth = birth;
//     this.place = place;
//     }
//     get FirstName() {
//         return this.firstName;
//     }
//     get LastName() {
//         return this.lastName;
//     }
//     get Age() {
//         return this.age;
//     }
//     get Occupation() {
//         return this.occupation;
//     }
//     get Role() {
//         return this.role;
//     }
//     get Gender() {
//         return this.gender;
//     }
//     get Birth() {
//         return this.birth;
//     }
//     get Place() {
//         return this.place;
//     }
//     set FirstName(firstName) {
//         this.firstName = firstName;
//     }
//     set LastName(lastName) {
//         this.lastName = lastName;
//     }
//     set Age(age) {
//         this.age = age;
//     }
//     set Occupation(occupation) {
//         this.occupation = occupation
//     }
//     set Role(role) {
//         this.role = role;
//     }
//     set Gender(gender) {
//         this.gender = gender;
//     }
//     set Birth(birth) {
//         this.birth = birth;
//     }
//     set Place(place) {
//         this.place = place;
//     }
// }
// var details = new Person("Ajith","kumar","25","Developer","Full stack devloper","male","15.09.1997","Devakottai");
// console.log(details);

// // OUTPUT

// // Person {firstName: 'Ajith', lastName: 'kumar', age: '25', occupation: 'Developer', role: 'Full stack devloper', …}
// // age
// // : 
// // "25"
// // birth
// // : 
// // "15.09.1997"
// // firstName
// // : 
// // "Ajith"
// // gender
// // : 
// // "male"
// // lastName
// // : 
// // "kumar"
// // occupation
// // : 
// // "Developer"
// // place
// // : 
// // "Devakottai"
// // role
// // : 
// // "Full stack devloper"

// // UBER PRICE CALCULATION

// class Uber{

//     constructor(price,distance){
//         this.price= price;
//         this.distance= distance;
 
//     }
//     get Price() {
//         return this.price;
//     }
//     set Price(price){
//         this.price=price;
//     }
//     get Uberdistance(){
//         this.distance=distance;
// }
// set Uberdistance(distance){
//     this.distance=distance;
// }
//     get Uberprice() {
//         return this.distance*this.price;
//     }
// }
// var calc = new Uber(80,8);
// console.log(calc.Uberprice);

// OUTPUT : 640 



