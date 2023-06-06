// const fs = require('fs');
// const inquirer = require('inquirer');
// const { Circle, Triangle, Square } = require('./shape');

// const PROMPT_QUESTIONS = [
//   { name: 'text', message: 'Enter up to three characters:' },
//   { name: 'textColor', message: 'Enter text color (keyword or hexadecimal):' },
//   {
//     name: 'shape',
//     message: 'Choose a shape:',
//     type: 'list',
//     choices: ['Circle', 'Triangle', 'Square'],
//   },
//   { name: 'shapeColor', message: 'Enter shape color (keyword or hexadecimal):' },
// ];

// inquirer.prompt(PROMPT_QUESTIONS).then((answers) => {
//   const { text, textColor, shape, shapeColor } = answers;

//   let shapeObj;
//   switch (shape) {
//     case 'Circle':
//       shapeObj = new Circle(shapeColor, 80); // radius = 80
//       break;
//     case 'Triangle':
//       shapeObj = new Triangle(shapeColor, 188, 164); // base = 188, height = 164
//       break;
//     case 'Square':
//       shapeObj = new Square(shapeColor, 200); // size = 200
//       break;
//     default:
//       console.log('Invalid shape');
//       return;
//   }

//   const svg = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
//                  <rect width="100%" height="100%" fill="${textColor}" />
//                  ${shapeObj.render()}
//                </svg>`;

//   fs.writeFile('logo.svg', svg, (err) => {
//     if (err) throw err;
//     console.log('Generated logo.svg');
//   });
// });

// shape.test.js
const { Triangle, Circle, Square } = require('./shape');

describe('Triangle', () => {
  test('render method returns SVG string with color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="0, 0 50, 0 0, 50" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render method returns SVG string with color', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="25" cy="25" r="25" fill="red" />');
  });
});

describe('Square', () => {
  test('render method returns SVG string with color', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect width="50" height="50" fill="green" />');
  });
});
