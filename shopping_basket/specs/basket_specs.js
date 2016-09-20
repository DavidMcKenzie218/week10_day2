var assert = require('assert');
var daz = require('../item.js');
var customer = require('../customer.js');
var basket = require('../basket.js');

describe("Basket", function(){

  before(function(){
    customer.giveName("Jim");
    daz.giveName("Daz");
    daz.givePrice(3.50);
  })

  beforeEach(function(){
    basket.emptyBasket();
  })

  it("Basket has a customer", function(){    
    basket.giveShopper(customer);
    assert.equal("Jim", basket.shopper.name);
  })

  it("Basket is empty", function(){
    assert.equal(0, basket.contents.length);
  })

  it("Basket can be given an item", function(){
    basket.addItem(daz);
    assert.equal(1, basket.contents.length);
  })

  it("Item can be emptied", function(){
    basket.addItem(daz);
    basket.emptyBasket();
    assert.equal(0, basket.contents.length);
  })

  it("An item can be removed from the basket", function(){
    basket.addItem(daz);
    basket.removeItem("Daz", 1);
    assert.equal(0, basket.contents.length);
  })

  it("Only one of an item can be removed", function(){
    basket.addItem(daz);
    basket.addItem(daz);
    basket.removeItem("Daz", 1)
    assert.equal(1, basket.contents.length)
  })

  it("Total Price is 0", function(){
    assert.equal(0, basket.totalCost);
  })

  it("Total Cost of 2 boxes of Daz", function(){
    basket.addItem(daz);
    basket.addItem(daz);
    assert.equal(7.00, basket.totalCost);
  })

})