// Write your code in this file!
function scuberGreetingForFeet(rideDistance){
  let message;
  if (rideDistance <= 400) {
    message = 'This one is on me!';
  } else if (rideDistance > 2000 && rideDistance < 2500){
    message = 'I will gladly take your thirty bucks.';
  } else if (rideDistance > 2500) {
    message = 'No can do.';
  }
  return message;
};

function ternaryCheckCity(city) {
  let city_message = (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
  return city_message;
};
