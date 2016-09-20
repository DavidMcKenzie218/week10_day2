var assert = require('assert');
var customer = require('../customer.js');

describe("Customer", function(){

  beforeEach(function(){
    customer.giveName("Jim");
  })

  it("Customer has a name", function(){
    assert.equal("Jim", customer.name);
  })

  it("Customer has a loyalty card", function(){
    customer.giveLoyaltyCard();
    assert.equal(true, customer.loyaltyCard);
  })

})