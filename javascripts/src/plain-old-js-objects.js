/* Write your code for the plain-old-js-objects-spec here */
var FRUIT_BEARING_AGE = 10;
var MAX_AGE = 100;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createOrange() {
  var new_orange = {
    diameter: getRandomInt(1,10)
  }
  return new_orange;
};

function createTree() {
  var tree = { 
    age: 0, 
    height: 0,
    orangeCount: 0,
    isAlive: true,

    grow: function() {
      this.age += 1;
      this.height += 10;
      this.orangeCount += getRandomInt(1,10);
      if (this.age > MAX_AGE) {
        this.isAlive = false;
      }
    },

    dropOrange: function() {
      var picked_orange = createOrange();
      return picked_orange;
    }
    
  }
  return tree;
};
