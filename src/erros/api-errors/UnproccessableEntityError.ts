import { CustomAPIError } from "./CustomApiError";

class UnproccessableEntity extends CustomAPIError {
  statusCode = 422;

  constructor(message: string) {
    super(message);
  }
}

export { UnproccessableEntity };
