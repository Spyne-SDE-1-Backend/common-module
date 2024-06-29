import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { QueryFailedError } from "typeorm";
import { CustomAPIError } from "../erros/api-errors/CustomApiError";

const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let message: string = err.message;
  let statusCode: number = err.statusCode;

  if (err instanceof QueryFailedError) {
    message = "Insert Or Update violates unique constraint error";
    statusCode = 422;

    const errorObj = {
      name: err.name,
      message: err.message,
      query: err.query,
      parameters: err.parameters,
    };
    console.error(JSON.stringify(errorObj));
  } else if (err instanceof CustomAPIError) {
    console.error(JSON.stringify(err.message));
  } else if (!statusCode) {
    message = "Something went wrong!";
    statusCode = 500;
    console.error(`Error triggered from errorHandler: ${err.message}`);
  } else {
    message = "Something went wrong!";
    statusCode = 500;
    console.error(`Error triggered from errorHandler: ${err.message}`);
  }

  return res
    .status(statusCode)
    .json({ success: false, statusCode, message, payload: {} });
};

export default errorHandler;
