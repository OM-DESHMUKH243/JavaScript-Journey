//user info printer 
let appUser = {
  username: "om_dev",
  email: "om@gmail.com",
  isActive: true
};

if (appUser.isActive) {
  console.log(appUser.username + " is active");
}

//product price update
let productDetails = {
  name: "Laptop",
  price: 50000
};

productDetails.price = productDetails.price + 5000;

console.log(productDetails);

//student object with total marks
let studentInfo = {
  name: "Om",
  rollNumber: 23,
  marks: {
    math: 85,
    science: 90,
    english: 88
  }
};

let totalMarks =
  studentInfo.marks.math +
  studentInfo.marks.science +
  studentInfo.marks.english;

console.log("Total Marks:", totalMarks);

//bank account object
let bankAccountDetails = {
  accountHolder: "Om Deshmukh",
  balance: 10000,

  deposit: function (amount) {
    this.balance += amount;
    console.log("Deposited:", amount);
    console.log("Current Balance:", this.balance);
  },

  withdraw: function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawn:", amount);
      console.log("Current Balance:", this.balance);
    } else {
      console.log("Insufficient balance");
    }
  }
};

bankAccountDetails.deposit(5000);
bankAccountDetails.withdraw(3000);
bankAccountDetails.withdraw(15000);

//profile summary
let profileDetails = {
  name: "Om",
  age: 20,

  introduce: function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  }
};

console.log(profileDetails.introduce());
