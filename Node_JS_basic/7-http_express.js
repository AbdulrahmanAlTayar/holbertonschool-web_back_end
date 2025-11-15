const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.slice(1);
      let output = `Number of students: ${students.length}\n`;

      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      const fieldLines = [];
      for (const [field, names] of Object.entries(fields)) {
        fieldLines.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      output += fieldLines.join('\n');

      resolve(output);
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((output) => {
      res.end(output);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(1245);

module.exports = app;
