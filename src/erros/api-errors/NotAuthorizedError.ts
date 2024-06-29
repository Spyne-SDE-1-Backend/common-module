import { CustomAPIError } from "./CustomApiError";

class NotAuthorizedError extends CustomAPIError {
  statusCode = 401;

  constructor(message: string) {
    super(message);
  }
}

export { NotAuthorizedError };
