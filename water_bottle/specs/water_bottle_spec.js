var assert = require('assert');
var waterBottle = require('../water_bottle.js');

describe("Water Bottle", function(){

  beforeEach(function(){
    waterBottle.empty();
  })

  it("It should be empty", function(){
    assert.equal(0, waterBottle.volume);
  })

  it("should go to 100 when filled", function(){
    waterBottle.fill();
    assert.equal(100, waterBottle.volume);
  })

  it("Should go down by 10 when drank", function(){
    waterBottle.fill();
    waterBottle.drink();
    assert.equal(90, waterBottle.volume);
  })

  it("Should go to 0 when emptied", function(){
    waterBottle.fill();
    waterBottle.empty();
    assert.equal(0, waterBottle.volume);
  })

  it("Should not be able to go below 0", function(){
    waterBottle.fill();
    for(var i =0; i<11; i++){
      waterBottle.takeDrink();
    };
    assert.equal(0, waterBottle.volume);
  })

})