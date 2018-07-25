import { OAuth } from "oauth";

function createTwitterOAuth() {
  return new OAuth(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    "5jVDtFcADABDhYss5htnatBaJ",
    "x7neGkZTPmPp4uhietcv3eEOunMFYyn9koiV5NRxjFU3un9xfa",
    "1.0A",
    null,
    "HMAC-SHA1"
  );
}

export default createTwitterOAuth;
