// class Shape {
//   constructor(color) {
//     this.color = color;
//   }

//   setColor(color) {
//     this.color = color;
//   }

//   render() {
//     throw new Error('Not implemented');
//   }
// }

// class Triangle extends Shape {
//   constructor(color, base, height) {
//     super(color);
//     this.base = base;
//     this.height = height;
//   }

//   render() {
//     return `
//       <div style="width: 0; height: 0; border-left: ${this.base / 2}px solid transparent; border-right: ${this.base / 2}px solid transparent; border-bottom: ${this.height}px solid ${this.color};"></div>
//     `;
//   }
// }

// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }

//   render() {
//     return `
//       <div style="width: ${2 * this.radius}px; height: ${2 * this.radius}px; border-radius: ${this.radius}px; background-color: ${this.color};"></div>
//     `;
//   }
// }

// class Square extends Shape {
//   constructor(color, size) {
//     super(color);
//     this.size = size;
//   }

//   render() {
//     return `
//       <svg width="${this.size}" height="${this.size}">
//         <rect width="${this.size}" height="${this.size}" style="fill:${this.color}" />
//       </svg>
//     `;
//   }
// }

// module.exports = { Shape, Circle, Triangle, Square };


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
