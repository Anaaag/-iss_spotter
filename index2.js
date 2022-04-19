// const { fetchMyIp } = require("./iss_promised")
// const { fetchCoordsByIp } = require("./iss_promised")
// const {fetchISSFlyOverTimes} = require("./iss_promised")

const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })

  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });




// fetchMyIp()
// .then(fetchCoordsByIp)
// .then(fetchISSFlyOverTimes)
// .then(body => console.log(body))
