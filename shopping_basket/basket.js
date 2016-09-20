var basket = {
  contents: [],
  totalCost: 0,
  giveShopper: function(customer){
    this.shopper = customer;
  },
  addItem: function(item){
    this.totalCost += item.price;
    this.contents.push(item);
  },
  emptyBasket: function(){
    this.contents = [];
    this.totalCost = 0;
  },
  removeItem: function(itemName, numToRemove){
    var numberToRemove = numToRemove;
    for(var i = 0; i<this.contents.length; i++){
      if(numberToRemove>0 && itemName === this.contents[i].name){
        this.contents.splice(i, 1);
        numberToRemove--;
      }
    }
  }
}


module.exports = basket;