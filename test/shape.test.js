
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
