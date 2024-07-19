const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

guests.unshift("BRUTUS"); 

// Question 1 
// How can you verify that "BRUTUS" was added to the beginning of the array?
// Answer 
/* 
You can check the first element of the `guests` array using `guests[0]`.
*/

guests.push("AUGUSTUS", "LUCIA"); 
const spartacusIndex = guests.indexOf("SPARTACUS"); 

// Question 2 
// What would the value of `spartacusIndex` be if "SPARTACUS" wasn't invited? 
/* 
If "SPARTACUS" wasn't invited, the `indexOf` method would return `-1`.
*/

const indexToRemove = guests.indexOf("CASSIUS"); 
guests.splice(indexToRemove, 1); 

const specialGuests = guests.slice(0, 3); 

const honoredGuests = guests.slice(0, 1); 
const otherGuests = guests.slice(1); 
otherGuests.sort(); 
const sortedGuests = honoredGuests.concat(otherGuests); 
