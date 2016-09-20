var assert = require('assert');
var athlete = require('../athlete.js');
describe("Athlete", function(){

  beforeEach(function(){
    athlete.reset();
  })

  it("Athlete has a name", function(){
    assert.equal("Jim", athlete.name);
  })

  it("Athlete is hydrated", function(){
    assert.equal(100, athlete.hydrationLevel);
  })

  it("Athlete has covered no distance", function(){
    assert.equal(0, athlete.distanceCovered);
  })

  it("Athlete can run 100m", function(){
    athlete.run(100);
    assert.equal(100, athlete.distanceCovered);
    assert.equal(90, athlete.hydrationLevel);
  })

  it("Athlete cannot run when not hydrated", function(){
    athlete.run(1100);
    assert.equal(1000, athlete.distanceCovered);
    assert.equal(0, athlete.hydrationLevel);
  })

  it("Athlete can drink water bottle", function(){
    athlete.drink();
    assert.equal(110, athlete.hydrationLevel);
  })

})