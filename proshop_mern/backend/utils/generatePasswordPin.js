function generatePasswordPin() {
    // Generate a random 6-digit number between 100000 and 999999
    const pin = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    
    // Return the pin as a string
    return pin.toString();
 }
 
export default generatePasswordPin
