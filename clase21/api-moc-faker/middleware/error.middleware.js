const HTTP_STATUS = require("../constants/api.constants");
const { errorResponse } = require("../utils/api.utils");

const errorMiddleware = (error, req, res, next) => {
  const errorStatus = error.statusCode || HTTP_STATUS.INTERNAL_ERROR;
  const errorMessage = error.message || "There was an unexpected error";
  const errorDetails = error.message ? null : error;
  return res
    .status(errorStatus)
    .json(errorResponse(errorMessage, errorDetails));
};

module.exports = errorMiddleware;
