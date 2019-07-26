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
} //Instructor

class Student extends Person {
  constructor(student_Attributes) {
    super(student_Attributes);
    this.previousBackground = student_Attributes.previousBackground;
    this.className = student_Attributes.className;
    this.favSubjects = student_Attributes.favSubjects;
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
