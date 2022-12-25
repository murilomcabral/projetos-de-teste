class Shape {

  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  // calcPerimeter() {
  //   console.log(this.name + ' perimenter: ' + this.sides * this.sideLength)
  // }

}

Shape.prototype.calcPerimeter = function() {
  console.log(this.name + ' perimenter: ' + this.sides * this.sideLength)
}
/*
  >> Assign function as method to Shape's class prototype.
*/

/*

const shapePrototype = {
  calcPerimeter() {
    console.log(this.name + ' perimenter: ' + this.sides * this.sideLength)
  }
}

Object.assign (Shape.prototype, shapePrototype)

  >> Assign function as method to Shape's class prototype.

*/

class Square extends Shape {

  constructor (sideLength) {
    super('square',4,sideLength)
  }

  calcArea() {
    console.log(this.name + ' area: ' + this.sideLength**2)
  }

}

const square = new Square(7)
square.calcArea() // square area: 49
square.calcPerimeter() // square perimenter: 28

/*
const square = new Shape('quadrado',4,5)
square.calcPerimeter()

const triangle = new Shape('triangulo',3,3)
triangle.calcPerimeter()
*/