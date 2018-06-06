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


