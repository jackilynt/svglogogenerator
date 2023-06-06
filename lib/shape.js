

// shape.js
class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return '';
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="0, 0 50, 0 0, 50" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="25" cy="25" r="25" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="50" height="50" fill="${this.color}" />`;
  }
}

module.exports = { Shape, Triangle, Circle, Square };
