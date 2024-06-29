import { CustomAPIError } from "./CustomApiError";

class BadRequestError extends CustomAPIError {
  statusCode = 400;

  constructor(message: string) {
    super(message);
  }
}

export { BadRequestError };
