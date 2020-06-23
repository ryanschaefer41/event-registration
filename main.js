let raceNumber = Math.floor(Math.random() * 1000); // creates random race number
const earlyRegistrant = true; // will define is registered early or late
const runnerAge = 18;

if (runnerAge > 18 && earlyRegistrant === true) {
  raceNumber += 1000;
  // console.log(raceNumber)
} // if entrant is over 18 and registered early, they get a number over 1000

if (runnerAge > 18 && earlyRegistrant === true) {
  console.log('Your race time is 9:30am and your race number is ' + raceNumber + '.');
  } else if (runnerAge > 18 && earlyRegistrant === false) {
    console.log('Your race time is 11am and your race number is ' + raceNumber + '.');
} else if (runnerAge < 18) {
  console.log('Your race time is 12:30pm and your race number is ' + raceNumber + '.');
} else if (runnerAge === 18) {
  console.log('Please see the registration desk.');
}
