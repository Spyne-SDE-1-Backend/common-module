import { CustomAPIError } from "./CustomApiError";

class InternalServerError extends CustomAPIError {
  statusCode = 500;

  constructor(message: string = 'Something went wrong!') {
    super(message);
  }
}

export { InternalServerError };
