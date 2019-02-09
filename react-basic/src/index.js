import Teacher, { promote } from "./teacher";

function sayHello() {
  const j = 0;
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(j);
}

sayHello();

//Second
const person = {
  name: "Imran",
  walk: function() {},
  talk() {
    console.log(this);
  }
};

person.walk();
//Why to use [] because we can dynamically call function
const functName = "talkg";
person[functName.value] = "Hello";

console.log(person.talk());

//Bind
const talk = person.talk;
talk();
const talk1 = person.talk.bind(person);
talk1();

// Arrow
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

console.log(jobs.filter(job => job.isActive));

//Magic of Arrow that inherit this from the code it was defined
const noArrow = {
  walk() {
    setTimeout(function() {
      console.log("this", this);
    }, 1000);
    setTimeout(() => {
      console.log("this =>", this);
    }, 1000);
  }
};

noArrow.walk();

// Array Map and Template Literal
const colors = ["red", "green", "blue"];
console.log(
  colors.map(function(color) {
    return "<li>" + color + "</li>";
  })
);
console.log(colors.map(color => "<li>" + color + "</li>"));
console.log(colors.map(color => `<li>${color}</li>`));

//Spread Operator
const first = [1, 2, 3];
const second = [3, 4, 5];

console.log(first.concat(second));
console.log([...first, ...second]);

const firstObj = { first: "Imran" };
const seoncdObj = { second: "Sarwar" };

console.log({ ...firstObj, ...seoncdObj, location: "Pakistan" });

// inheritence

const teacher = new Teacher("Imran");
teacher.walk();
teacher.teach();
promote();
