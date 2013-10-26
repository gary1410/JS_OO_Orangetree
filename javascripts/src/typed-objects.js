var FRUIT_BEARING_AGE = 10;
var MAX_AGE = 100;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var Tree = function() {
  this.age = 0;
  this.height = 0;
  this.isAlive = true;
}

var OrangeTree = function() {
  this.orangeCount = 0;

  this.grow = function() {
    this.age += 1;
    this.height += 10;
    this.orangeCount += getRandomInt(1,10);
    if (this.age > MAX_AGE) {
      this.isAlive = false;
    }
  }

  this.dropOrange = function() {
    var picked_orange = new Orange();
    this.orangeCount -= 1;
    return picked_orange;
  }
}

var Orange = function() {
  this.diameter = getRandomInt(1,10);
}


OrangeTree.prototype = new Tree();
