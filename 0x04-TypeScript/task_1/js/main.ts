// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Interface for the StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for the StudentClass instance
interface StudentInterface {
  readonly firstName: string;
  readonly lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Implement the StudentClass
class StudentClass implements StudentInterface {
  readonly firstName: string;
  readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create teacher3 instance as per the example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Create director1 instance as per the example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Test the printTeacher function
console.log('printTeacher("John", "Doe"):', printTeacher("John", "Doe"));
console.log('printTeacher("Alice", "Smith"):', printTeacher("Alice", "Smith"));
console.log('printTeacher("Bob", "Johnson"):', printTeacher("Bob", "Johnson"));

// Test the StudentClass
const student1: StudentInterface = new StudentClass('John', 'Doe');
const student2: StudentInterface = new StudentClass('Alice', 'Smith');

console.log('Student 1 Display Name:', student1.displayName());
console.log('Student 1 Homework Status:', student1.workOnHomework());
console.log('Student 2 Display Name:', student2.displayName());
console.log('Student 2 Homework Status:', student2.workOnHomework());

// Additional examples to demonstrate the interface properties
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  location: 'Paris',
  specialty: 'Mathematics', // Additional attribute
  contract: true // Additional attribute
};

const director2: Directors = {
  firstName: 'Sarah',
  lastName: 'Wilson',
  fullTimeEmployee: true,
  location: 'Berlin',
  numberOfReports: 8,
  yearsOfExperience: 10 // Optional property from Teacher interface
};

const director3: Directors = {
  firstName: 'Michael',
  lastName: 'Brown',
  fullTimeEmployee: false,
  location: 'Tokyo',
  numberOfReports: 23,
  department: 'Engineering' // Additional attribute allowed by index signature
};

// More StudentClass examples
const students: StudentInterface[] = [
  new StudentClass('Emma', 'Davis'),
  new StudentClass('Liam', 'Wilson'),
  new StudentClass('Olivia', 'Brown')
];

students.forEach((student, index) => {
  console.log(`Student ${index + 1}:`, {
    displayName: student.displayName(),
    homeworkStatus: student.workOnHomework(),
    firstName: student.firstName,
    lastName: student.lastName
  });
});

// This will cause TypeScript error if uncommented (readonly properties)
// teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property.
// director1.lastName = 'Smith'; // Error: Cannot assign to 'lastName' because it is a read-only property.
// student1.firstName = 'Mike'; // Error: Cannot assign to 'firstName' because it is a read-only property.

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Director 2:', director2);
console.log('Director 3:', director3);

// More printTeacher examples using the existing objects
console.log('Teacher 1 formatted:', printTeacher(teacher1.firstName, teacher1.lastName));
console.log('Director 1 formatted:', printTeacher(director1.firstName, director1.lastName));

// Factory function using the constructor interface
function createStudent(ctor: StudentConstructor, firstName: string, lastName: string): StudentInterface {
  return new ctor(firstName, lastName);
}

const student3: StudentInterface = createStudent(StudentClass, 'Sophia', 'Miller');
console.log('Factory created student:', {
  displayName: student3.displayName(),
  homeworkStatus: student3.workOnHomework()
});

// This would cause a TypeScript error (missing required property)
// const invalidDirector: Directors = {
//   firstName: 'Invalid',
//   lastName: 'Director',
//   fullTimeEmployee: true,
//   location: 'Somewhere'
//   // Missing numberOfReports - Error: Property 'numberOfReports' is missing
// };

// This would cause a TypeScript error (wrong function signature)
// const invalidPrintTeacher: printTeacherFunction = (firstName: string) => firstName;
// Error: Type '(firstName: string) => string' is not assignable to type 'printTeacherFunction'