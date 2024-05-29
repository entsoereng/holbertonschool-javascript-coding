const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the file content by new lines to get each row
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    // Remove the header row
    const header = lines.shift();

    const students = {};
    let totalStudents = 0;

    lines.forEach(line => {
      const [firstName, , , field] = line.split(',');

      if (firstName && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents++;
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
