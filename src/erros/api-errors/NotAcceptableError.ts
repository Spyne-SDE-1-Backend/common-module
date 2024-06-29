import { CustomAPIError } from "./CustomApiError";

class NotAcceptableError extends CustomAPIError {
  statusCode = 406;

  constructor(message: string) {
    super(message);
  }
}

export { NotAcceptableError };
