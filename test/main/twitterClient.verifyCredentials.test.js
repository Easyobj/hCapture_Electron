import createTwitterOAuth from "../../src/main/createTwitterOAuth";
import createTwitterClient from "../../src/main/createTwitterClient";

const client = createTwitterClient(
  createTwitterOAuth(),
  "5jVDtFcADABDhYss5htnatBaJ",
  "x7neGkZTPmPp4uhietcv3eEOunMFYyn9koiV5NRxjFU3un9xfa"
);

client
  .verifyCredentials()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
