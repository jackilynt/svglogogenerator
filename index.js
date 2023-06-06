// const fs = require('fs');
// const inquirer = require('inquirer');
// const { Shape, Circle, Triangle, Square } = require('./lib/shape');

// const PROMPT_QUESTIONS = [
//   { name: 'text', message: 'Enter up to three characters:' },
//   { name: 'textColor', message: 'Enter text color (keyword or hexadecimal):' },
//   {
//     name: 'shape',
//     message: 'Choose a shape:',
//     type: 'list',
//     choices: ['Circle', 'Triangle', 'Square']
//   },
//   { name: 'shapeColor', message: 'Enter shape color (keyword or hexadecimal):' },
// ];

// inquirer.prompt(PROMPT_QUESTIONS).then(answers => {
//   const { text, textColor, shape, shapeColor } = answers;

//   let shapeObj;
//   switch (shape) {
//     case 'Circle':
//       shapeObj = new Circle(shapeColor, 80);
//       break;
//     case 'Triangle':
//       shapeObj = new Triangle(shapeColor, 120, 120);
//       break;
//     case 'Square':
//       shapeObj = new Square(shapeColor, 200);
//       break;
//     default:
//       console.log('Invalid shape');
//       return;
//   }

//   const svg = `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
//                  <rect width="100%" height="100%" fill="${textColor}" />
//                  <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="80" fill="${shapeColor}">${text}</text>
//                  ${shapeObj.render()}
//                </svg>`;

              
//   fs.writeFile('logo.svg', svg, (err) => {
//     if (err) throw err;
//     console.log('Generated logo.svg');
//   });
// });

const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Circle, Triangle, Square } = require('./lib/shape');

const PROMPT_QUESTIONS = [
  { name: 'text', message: 'Enter up to three characters:' },
  { name: 'textColor', message: 'Enter text color (keyword or hexadecimal):' },
  {
    name: 'shape',
    message: 'Choose a shape:',
    type: 'list',
    choices: ['Circle', 'Triangle', 'Square']
  },
  { name: 'shapeColor', message: 'Enter shape color (keyword or hexadecimal):' },
];

inquirer.prompt(PROMPT_QUESTIONS).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;

  let shapeObj;
  let viewBoxWidth;
  let viewBoxHeight;

  switch (shape) {
    case 'Circle':
      shapeObj = new Circle(shapeColor, 25);
      viewBoxWidth = 50;
      viewBoxHeight = 50;
      break;
    case 'Triangle':
      shapeObj = new Triangle(shapeColor, 30, 30);
      viewBoxWidth = 50;
      viewBoxHeight = 50;
      break;
    case 'Square':
      shapeObj = new Square(shapeColor, 50);
      viewBoxWidth = 50;
      viewBoxHeight = 50;
      break;
    default:
      console.log('Invalid shape');
      return;
  }

  const svg = `<svg viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}" xmlns="http://www.w3.org/2000/svg">
                 ${shapeObj.render()}
                 <rect width="100%" height="100%" fill="${textColor}" opacity="0.5" />
                 <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="20" fill="${shapeColor}">${text}</text>
               </svg>`;

  fs.writeFile('logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});
