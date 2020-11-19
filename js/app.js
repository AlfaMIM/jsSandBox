console.log("Hello world!");
//задать переменные 
let name = "Harry Potter";
let age = 18;
let survived = false;
let city = "London";
let commentary = "";
let drivingLicense = "";
//console.log("Character: ", name,". Age:", age, ". City:", city);
console.log(`Character: ${name}. Age: ${age}. City: ${city}.`);

if(survived){
    commentary = "survived the battle for Hogwarts.";
} else {
    commentary = "died in the battle for Hogwarts.";
}
console.log(`Charecter: ${name} ${commentary}`);

if(age >18){
    drivingLicense = `${name} is too young to drive a car`;
} else {
    drivingLicense = `${name} is too enough to drive a car`;
}

console.log(drivingLicense);

//ul - не упорядоченный список
const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>He ${commentary}</li>
        <li>${drivingLicense}</li>
    </ul>

`;

document.body.innerHTML = html;