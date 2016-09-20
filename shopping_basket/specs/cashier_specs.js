var assert = require('assert');
var daz = require('../item.js');
var customer = require('../customer.js');
var loyalCustomer = require('../customer.js');
var basket = require('../basket.js');
var loyalBasket = require('../basket.js');
var cashier = require('../cashier.js');

describe('Cashier', function(){

  beforeEach(function(){
    customer.giveName("Jim");
    loyalCustomer.giveName("George");
    loyalCustomer.giveLoyaltyCard();
    daz.giveName("Daz");
    daz.givePrice(3.50);
    basket.giveShopper(customer);
    loyalBasket.giveShopper(loyalCustomer);
  })

  // beforeEach(function(){
  //   cashier.goToCheckout(basket);
  // })


  it("No baskets at checkout", function(){
    assert.equal(0, cashier.basketCount.length)
  })

  it("Customer has a basket", function(){
    cashier.goToCheckout(basket);
    assert.equal(1, cashier.basketCount.length);
  })

  it("Basket gives no discount for total under £20", function(){
    assert.equal(false, cashier.giveDiscount());
  })

  it("Basket can give discount for total over £20", function(){
    for(var i = 0; i<10; i++){
    basket.addItem(daz);
    }
    cashier.goToCheckout(basket);
  assert.equal(true, cashier.giveDiscount());
  })

  it("Customer owes nothing", function(){
    cashier.finnishTransaction();
    assert.equal(0, cashier.customerToPay);
  })

  it("Total of basket is reduced when over £20", function(){
    basket.emptyBasket();
    customer.removeLoyaltyCard();
    cashier.finnishTransaction();
    for(var i = 0; i<10; i++){
    basket.addItem(daz);
    }    
    cashier.goToCheckout(basket);
    cashier.applyDiscount();
    assert.equal(31.50, cashier.customerToPay.toFixed(2));
  })

  it("Customers loyalty card is applied", function(){
    loyalBasket.emptyBasket();
    cashier.finnishTransaction();
    for(var i = 0; i<10; i++){
    loyalBasket.addItem(daz);
    } 
    cashier.goToCheckout(loyalBasket);
    cashier.applyDiscount();
    assert.equal(29.92, cashier.customerToPay.toFixed(2));
  })

})