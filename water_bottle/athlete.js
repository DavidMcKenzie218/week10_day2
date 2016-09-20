var waterBottle = require('./water_bottle.js');

var athlete = {
  name: "Jim",
  hydrationLevel: 100,
  distanceCovered: 0,
  reset: function(){
    this.hydrationLevel = 100;
    this.distanceCovered = 0;
  },
  run: function(distance){
    var distanceRan = distance;
    while(distanceRan>this.hydrationLevel*10){
      distanceRan -= 10;
    }
    this.distanceCovered += distanceRan;
    this.hydrationLevel -= (distanceRan/10);
  }, 
  drink: function(){
    if(waterBottle.volume > 0){
      athlete.hydrationLevel += 10;
      waterBottle.takeDrink();
    }else { 
      waterBottle.fill();
      this.drink();
    }
  }
}

module.exports = athlete;