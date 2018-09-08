//Object distracting is somthing like calling all the members 
// an object to another variable in a simple and easy way
// making different names for them 

const address = {

    street: "",
    city: "",
    country: ""

};
// this is the normal way to do this but its so old and long 
const street = address.street;
const city = address.city;
const country = address.country;
// lets do this with object distracting like this 
// every object of address is assign to new constant 
const {street, city, country} = address;

// and if we want only one of them and
// assign a defferent name we can do this like this 

const {street:st} = address;