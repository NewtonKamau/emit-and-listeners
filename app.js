 var events = require('events');

var util = require('util');

var Person = function(name){
  this.name = name;

};
util.inherits(Person, events.EventEmitter);
 var James = new Person('James');
 var Mary = new Person('Mary');
 var ryu = new Person('ryu');
 var people = [James, Mary, ryu];

 people.forEach(function(Person){
   Person.on('speak',function(mssg){
     console.log(Person.name  +  ' said: ' +  mssg);
   });

 });
 James.emit('speak','hey dudes' );
 ryu.emit('speak', 'I want a ride to the coast');
