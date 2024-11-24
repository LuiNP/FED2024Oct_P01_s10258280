//Literal Object
console.log(`LITERAL OBJECT`);
let hotel  = {

  name: 'Raffles Hotel',
  rooms:  100,
  booked: 24,
  gym: true,
  roomTypes: ['twin','suite','delux'],

  checkAvailability: function() {
    return this.rooms - this.booked;
  } 
};

console.log(`Hotel Name: ${hotel.name}`);
console.log(`Available rooms?: ${hotel.checkAvailability()}`);

console.log(`FUNCTION BASED OBJECTS`);

function Hotel(name, rooms, booked= 100){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  }; 
  this.printHotelDetails = function(){
    //console.log(".....");
    return `\nHotel Name: ${this.name}\nHotel Rooms: ${this.rooms}\nBooked Rooms: ${this.booked}\nAvailable Rooms: ${this.checkAvailability()}
            `;
  }
}
let ngeeannHotel = new Hotel("Ngee Ann Hotel", 88, 40);
console.log(ngeeannHotel.printHotelDetails());



