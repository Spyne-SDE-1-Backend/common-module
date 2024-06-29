import { Response } from "express";

class ResponseService {
  constructor() {}

  protected isSuccess = (statusCode: number) => {
    const errorStatusCode = [400, 401, 403, 404, 412, 422, 469, 500];

    return errorStatusCode.every((status: number) => status !== statusCode);
  };

  protected sendResponse = (
    res: Response,
    statusCode: number,
    payload?: object,
    message?: string
  ) => {
    return res.status(statusCode).json({
      success: this.isSuccess(statusCode) ? true : false,
      statusCode: Number(statusCode),
      message: message,
      payload,
    });
  };

  protected serviceResponse = (
    statusCode: number,
    payload: object,
    message: string
  ) => {
    return { statusCode, payload, message };
  };
}

export default ResponseService;
