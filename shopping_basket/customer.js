var customer = {
  giveName: function(name){
    this.name = name;
  },
  giveLoyaltyCard: function(){
    this.loyaltyCard = true;
  },
  removeLoyaltyCard: function(){
    this.loyaltyCard = false;
  }
}

module.exports = customer;