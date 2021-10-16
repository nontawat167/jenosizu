import { Request, Response, NextFunction } from "express";

export const game24rule = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.value) {
    return res.status(400).json({ error: "should have value in body" });
  }

  if (req.body.value.length !== 4) {
    return res
      .status(400)
      .json({ error: "value should be array of 4 numbers" });
  }

  const someIsNaN = req.body.value.some((el: any) => isNaN(el));
  if (someIsNaN) {
    return res
      .status(400)
      .json({ error: "value should be array of 4 numbers" });
  }

  next();
};
