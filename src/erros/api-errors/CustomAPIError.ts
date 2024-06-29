export abstract class CustomAPIError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
  }
}
