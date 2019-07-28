// CODE here for your Lambda Classes
class Person {
  constructor(person_Attributes) {
    this.name = person_Attributes.name;
    this.age = person_Attributes.age;
    this.location = person_Attributes.location;
  }
  //methods
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  } //speak
} //Person

class Instructor extends Person {
  constructor(instructor_Attributes) {
    super(instructor_Attributes);
    this.specialty = instructor_Attributes.specialty;
    this.favLanguage = instructor_Attributes.favLanguage;
    this.catchPhrase = instructor_Attributes.catchPhrase;
  }
  //methods
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  } //demo

  grade(student, subject) {
    console.log(`${student.name} recieves a perfector scrore on ${subject}.`);
  } //grade

  changeGrade(student) {
    const randomNum = Math.floor(Math.random() * 100);
    let posOrNeg = 0;

    const plusOrMinus = () => {
      if (Math.random() < 0.5) {
        posOrNeg = -1;
      } else {
        posOrNeg = 1;
      }
      return posOrNeg;
    };

    return (student.grade = student.grade + randomNum * plusOrMinus());
  } //changeGrade
} //Instructor

class Student extends Person {
  constructor(student_Attributes) {
    super(student_Attributes);
    this.previousBackground = student_Attributes.previousBackground;
    this.className = student_Attributes.className;
    this.favSubjects = student_Attributes.favSubjects;
    this.grade = student_Attributes.grade;
  }
  //methods
  listsSubjects() {
    return this.favSubjects.forEach(item => console.log(item));
  } //listsSubjects

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  } //PRAssignment

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  } //sprintChallenge

  graduate() {
    if (this.grade >= 70) {
      this.graduated = true;
    } else {
      this.graduated = false;
    }
    return this.graduated;
  }
} // Student

class ProjectManager extends Instructor {
  constructor(pm_Attributes) {
    super(pm_Attributes);
    this.gradClassName = pm_Attributes.gradClassName;
    this.favInstructor = pm_Attributes.favInstructor;
  }
  //methods
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  } //standUp
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  } //debugsCode
} //ProjectManager

// Objects
const chris = new Student({
  name: "Chris",
  age: 24,
  location: "Waterbury, CT",
  previousBackground: "Front End Developer",
  className: "WEB22",
  favSubjects: ["Javascript", "React"],
  grade: Math.floor(Math.random() * 100),
  graduated: false
});

const brit = new Instructor({
  name: "Brit"
});

console.log(chris.grade);
console.log(brit.changeGrade(chris));

console.log(chris.graduate());
