//what's object 

let userProfile = {
  name: "Om",
  age: 20,
  isDeveloper: true
};

console.log(userProfile);


//access object properties 
///dot . notation
console.log(userProfile.name);
console.log(userProfile.age);

//bracket[] notation
console.log(userProfile["isDeveloper"]);

//modify object properties
userProfile.age = 21;
userProfile.country = "India";

console.log(userProfile);

//nested objects
let studentRecord = {
  studentName: "Om",
  marks: {
    math: 85,
    science: 90,
    english: 88
  }
};

console.log(studentRecord.marks.math);

//loop through object
let laptopSpecs = {
  brand: "Apple",
  model: "MacBook",
  ram: "8GB",
  storage: "256GB"
};

for (let key in laptopSpecs) {
  console.log(key + ":", laptopSpecs[key]);
}

//object with function(method)
let calculatorObject = {
  addNumbers: function (a, b) {
    return a + b;
  },
  multiplyNumbers: function (a, b) {
    return a * b;
  }
};

console.log(calculatorObject.addNumbers(5, 3));
console.log(calculatorObject.multiplyNumbers(4, 6));

//this keyword(imp*)
let personDetails = {
  firstName: "Om",
  lastName: "Deshmukh",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log(personDetails.getFullName());

