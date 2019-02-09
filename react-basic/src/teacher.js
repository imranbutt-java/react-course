import { Person } from "./person";

//Method
export function promote() {
  console.log("Promote");
}

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  //Function
  teach() {
    console.log("teach");
  }
}
