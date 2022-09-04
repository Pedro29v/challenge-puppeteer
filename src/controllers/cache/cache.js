const getExpeditiousCache = require("express-expeditious");

const defaultOptions = {
  namespace: "expresscache",
  defaultTtl: "1 minute",
};

const cache = getExpeditiousCache(defaultOptions);

module.exports = { cache };
