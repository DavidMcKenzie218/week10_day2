var assert = require('assert');
var item = require('../item.js');

describe("Daz", function(){

  beforeEach(function(){    
    item.giveName("Daz");
    item.givePrice(3.50);
  })

  it("Item can be given a name", function(){
    assert.equal("Daz", item.name);
  })

  it("Item can be given a price", function(){
    assert.equal(3.50, item.price);
  })

})

describe("Cheese", function(){

  beforeEach(function(){
    item.giveName("Cheese");
    item.givePrice(2.10);
  })

  it("Item can be given a name", function(){
    assert.equal("Cheese", item.name);
  })

  it("Item can be given a price", function(){
    assert.equal(2.10, item.price);
  })

})