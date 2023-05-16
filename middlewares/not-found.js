const { StatusCodes } = require("http-status-codes");

module.exports = notFound = (req, res) => {
  return res
    .status(StatusCodes.NOT_FOUND)
    .send(`${req.url} route does not exist`);
};
