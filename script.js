// complete this js code
function Person(name, age) {
	this.pName = name;
	this.pAge = age;

	greet(){
		console.log(`Hello, my name is ${this.pName}, I and ${this.pAge} years old.`)
	}
	
}

function Employee(name, age, jobTitle) {
	this.eName = name;
	this.eAge = age;
	this.eJobTitle = jobTitle;
}
Employee.prototype = Person;
Employee.prototype.jobGreet = function(){
	return `Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.`
} 


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
