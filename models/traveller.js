const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function (journey) {
return this.journeys.map(function(journey){
  return journey.startLocation
})
};


Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map(function(journey) {
  return journey.endLocation
})
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter(function(journey) {
  if (journey.transport === transport) {
    return journey.transport
  }
})
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {



return this.journeys.filter(function(journeys) {
 if (journeys.distance >= minDistance) {
     return journeys.distance
  }
})
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
this.journeys.reduce(function(){
  (accumulator, current) => accumulator + current.distance
})
};




module.exports = Traveller;
