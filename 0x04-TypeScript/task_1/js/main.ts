// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attributes
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

// This will cause TypeScript error if uncommented (readonly properties)
// teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property.

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);