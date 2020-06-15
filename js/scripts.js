//business logic for places you've been
function PlacesUHaveBeen(){
  this.places = [];
  this.placeId = 0;
}
PlacesUHaveBeen.prototype.addPlace = function(place){
  place.id = this.addId();
  this.places.push(place);
}
PlacesUHaveBeen.prototype.addId = function(){
  this.placeId += 1;
  return this.placeId;
}
PlacesUHaveBeen.prototype.findPlace = function(id){
  for (let i=0; i< this.places.length; i++){
    if (this.places[i].id == id){
      return this.places[i];
    }
  };
return false;
}
//business logic for places
function Place (cityName, countryName, landMark){
  this.cityName = cityName;
  this.countryName = countryName;
  this.landMark = landMark;
}
Place.prototype.fullLists = function() {
  return this.cityName + " " + this.countryName;
}























/* Bussiness Logic for AddressBook
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< thistory.contacts.length; i++) {
    if (this.contacts[i]) { 
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

//Bussiness Logic for Contacts 
function Contact (firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullname = function(){
  return this.firstName + " " + this.lastName;
}