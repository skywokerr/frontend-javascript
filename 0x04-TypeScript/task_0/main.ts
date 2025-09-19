// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    
    // Create table header
    const headerRow = document.createElement('tr');
    const firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';
    const locationHeader = document.createElement('th');
    locationHeader.textContent = 'Location';
    
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tbody.appendChild(headerRow);
    
    // Append rows for each student
    studentsList.forEach((student) => {
        const row = document.createElement('tr');
        
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    document.body.appendChild(table);
    
    // Add some basic styling
    table.style.borderCollapse = 'collapse';
    table.style.width = '50%';
    table.style.margin = '20px auto';
    
    const th = table.querySelectorAll('th');
    const td = table.querySelectorAll('td');
    
    th.forEach((cell) => {
        cell.style.border = '1px solid #ddd';
        cell.style.padding = '8px';
        cell.style.textAlign = 'left';
        cell.style.backgroundColor = '#f2f2f2';
    });
    
    td.forEach((cell) => {
        cell.style.border = '1px solid #ddd';
        cell.style.padding = '8px';
    });
});