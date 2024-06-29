import { CustomAPIError } from "./CustomApiError";

class NotFoundError extends CustomAPIError {
  statusCode = 404;

  constructor(message: string) {
    super(message);
  }
}

export { NotFoundError };
