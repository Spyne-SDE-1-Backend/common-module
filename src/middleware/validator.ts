import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { PreConditionError } from "../erros/api-errors/PreConditionError";

export default function validatePayload<T>(schema: ObjectSchema<T>) {
  return function (req: Request, _res: Response, next: NextFunction) {
    try {
      const data = {
        ...req.params,
        ...req.query,
        ...req.body,
      };

      const { error, value } = schema.validate(data);

      if (error) {
        throw new PreConditionError(error.message.replace(/\"/g, ""));
      }

      Object.assign(req, { payload: value });
      next();
    } catch (err) {
      return next(err);
    }
  };
}
