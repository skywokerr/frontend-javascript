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

// This will cause TypeScript error if uncommented (readonly properties)
// teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property.
// director1.lastName = 'Smith'; // Error: Cannot assign to 'lastName' because it is a read-only property.

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Director 2:', director2);
console.log('Director 3:', director3);

// This would cause a TypeScript error (missing required property)
// const invalidDirector: Directors = {
//   firstName: 'Invalid',
//   lastName: 'Director',
//   fullTimeEmployee: true,
//   location: 'Somewhere'
//   // Missing numberOfReports - Error: Property 'numberOfReports' is missing
// };