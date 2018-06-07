/* variable */
// previously var assign variable
var pizza = true;
pizza = false;
console.log(pizza);

// now we have const, to declare constant variable
const orange = true;
// orange = false;
// this gives error, const produce fixed variable
console.log(orange);

// with var the topic is not scoped to the block {}
var topic = 'Javascript'
if (topic) {
    var topic = "React"
    console.log('block', topic) // block React
}
console.log('global', topic)

// with let the title is scoped to any code block {}, it protects the value of global variable
let title = 'Javascript'
if (title) {
    let title = "React"
    console.log('block', title) // block React
}
console.log('global', title) // global Javascript 


// with var when box is clicked, the number is 5 because global i at the end of the loop is 5
var div, container = document.getElementById('container')
for (var i=0; i<5; i++){
    div = document.createElement('div')
    div.onclick = function(){
        alert('This is box #' + i)
    }
    div.innerHTML = `<p>${i}</p>`
    container.appendChild(div)
}

// with let when the box is clicked, the number is according to j in the loop that is scoped in the loop block
var div1, container1 = document.getElementById('container1')
for (let j=0; j<5; j++){
    div1 = document.createElement('div')
    div1.onclick = function(){
        alert('This is box #' + j)
    }
    div1.innerHTML = `<p>${j}</p>`
    container1.appendChild(div1)
}

// default parameters

function logHobby(name="Amirul Abu", activity="reading"){
    console.log(`Hi, I am ${name} and my hobby is ${activity}`)
}

logHobby()
logHobby("Ahmad", "watching Youtube")

let defaultSetting = {
    id: 300,
    name: "UltraCyborg",
    specification: {
        material: "cast iron",
        type: "battlebot"
    }
}

function robotSpec(robot=defaultSetting){
    console.log(`
---
ID: ${robot.id} , NAME: ${robot.name}
SPECIFICATION: ${robot.specification.material} - ${robot.specification.type}
---
    `)
}

robotSpec()

// arrow function 

var lordify = function(firstname){
    return `${firstname} of Canterbury`
}

console.log( lordify("Dale") )
console.log( lordify("Chick") )

var lordify1 = firstname => `${firstname} of Westminister`

console.log( lordify("Angus") )
console.log( lordify("Canter") )

var lordify2 = function(firstname, land) {
    if(!firstname) {
        throw new Error('A firstname is required to lordify')
    }

    if(!land){
        throw new Error('A lord must have a land')
    }

    return `${firstname} of ${land}`
}

console.log( lordify2("Ahmad","Kabash") )

// take note for multiple parameter and multiple line usage in arrow function 

var lordify3 = (firstname, land) => {
    if(!firstname) {
        throw new Error('A firstname is required to lordify')
    }

    if(!land){
        throw new Error('A lord must have a land')
    }

    return `${firstname} of ${land}`
}

console.log( lordify2("Johnson","West Wales") )

var melaka = {
    resorts: ["A Famosa", "Palm beach", "Royal Klebang"],
    print: function(delay=0){
        setTimeout(function(){
            // console.log(this.resorts.join(","))
            // gives this.resorts is undefined
            console.log(this)
            // this is window object
            // this becomes something else in setTimeout, not melaka object
        }, delay)
    }
}

melaka.print()


var melaka = {
    resorts: ["A Famosa", "Palm beach", "Royal Klebang"],
    print: function(delay=0){
        setTimeout(() => {
            console.log(this.resorts.join(","))
            // gives this.resorts in melaka object
            console.log(this)
            // this is melaka object
        }, delay)
    }
}

melaka.print()


var melaka1 = {
    resorts: ["A Famosa", "Palm beach", "Royal Klebang"],
    print: (delay=0) => {

        setTimeout(() => {
            console.log(this === window)
        },delay)

    }
}

melaka1.print()

// destructuring assignment

var sandwich = {
    bread: "hearty italian",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
}

var {bread, meat} = sandwich

console.log("bread, meat",bread,meat)

bread = "garlic"
meat = "turkey"

console.log("bread", bread)
console.log("meat",meat)

console.log("sandwich.bread", sandwich.bread)
console.log("sandwich.meat", sandwich.meat)

var lordify4 = regularPerson => {
    console.log(`${regularPerson.firstname} of Scotland`)
}

var regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
}

lordify4(regularPerson)

var lordify5 = ({firstname}) => console.log(`${firstname} of Wimbeldon`)

var regularPerson1 = {
    firstname: "Tony",
    lastname: "Tom"
}

lordify5(regularPerson1)


var [firstcar] = ["Toyota", "Honda", "Suzuki"]
console.log(firstcar) // Toyota

var [,,thirdcar] = ["Toyota", "Honda", "Suzuki"]
console.log(thirdcar) // Suzuki

var name = "Kinabalu"
var elevation = 4032
var funHike = {name, elevation}

console.log(funHike)

function directions(...args) {
    var [start, ...remaining] = args
    var [finish, ...stops] = remaining.reverse()

    console.log(`drive through ${args.length} towns`)
    console.log(`start in ${start}`)
    console.log(`the destination is ${finish}`)
    console.log(`stopping ${stops.length} times in between`)
}

directions(
    "Truckee",
    "Tahoe City",
    "Sunnyside",
    "Homewood",
    "Tahoma"
)

// var morning = {
//     breakfast: "Nasi Lemak",
//     lunch: "Nasi Campur"
// }

// var dinner = "Spaghetii Carbonara";

// var menu = {
//     ...morning,
//     dinner
// }

// console.log(menu);

// not in ES6