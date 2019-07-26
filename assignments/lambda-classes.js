// CODE here for your Lambda Classes
class Person {
  constructor(person_Attributes) {
    this.name = person_Attributes.name;
    this.age = person_Attributes.age;
    this.location = person_Attributes.location;
  }

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

  listsSubjects() {
    return this.favSubjects.forEach(item => console.log(item));
  } //listsSubjects

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  } //PRAssignment
}
