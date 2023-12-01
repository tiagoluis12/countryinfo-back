const errorHandler = (err, req, res, next) => {
  console.error(err); // For logging purposes
  res.status(500).send({
    error: "Internal Server Error",
    message: err.message,
  });
};

module.exports = errorHandler;
