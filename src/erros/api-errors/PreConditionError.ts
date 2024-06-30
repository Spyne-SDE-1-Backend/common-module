import { CustomAPIError } from "./CustomApiError";

class PreConditionError extends CustomAPIError {
  statusCode = 412;

  constructor(message: string) {
    super(message);
  }
}

export { PreConditionError };
