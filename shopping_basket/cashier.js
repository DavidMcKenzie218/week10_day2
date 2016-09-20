var cashier = {
  basketCount: [],
  customerToPay: 0,
  goToCheckout: function(basket){
    this.basketCount.push(basket);
  },
  finnishTransaction: function(){
    this.basketCount = [];
    this.customerToPay = 0;
  },
  totalCostOfBasket: function(){
    var totalBasketCost = 0;
    for(var i =0; i<this.basketCount.length; i++){
      totalBasketCost += this.basketCount[i].totalCost;
    }
    this.customerToPay = totalBasketCost;
  },
  giveDiscount: function(){
    this.totalCostOfBasket();
    if(this.customerToPay >= 20){
      return true;
    }else{
      return false;
    }
  },
  applyDiscount: function(){
    if(this.giveDiscount() === true){
      this.customerToPay = (this.customerToPay * 0.90);
    }

    if(this.loyaltyCardDiscount() === true){
      this.customerToPay = (this.customerToPay * 0.95)
    }
  },
  loyaltyCardDiscount: function(){
    console.log(this.basketCount[0].shopper.loyaltyCard);
    console.log(this.basketCount)
    console.log(this.basketCount[0].shopper)
    if(this.basketCount[0].shopper.loyaltyCard === true){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = cashier;