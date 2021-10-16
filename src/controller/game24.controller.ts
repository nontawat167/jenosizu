import { Request, Response } from "express";
//@ts-ignore
import Game from "24points";

export const game24Handler = (req: Request, res: Response) => {
  const numbers = req.body.value.map((number: any) => Number(number));
  const result = Game.solve(numbers[0], numbers[1], numbers[2], numbers[3]);

  if (!result) {
    return res.status(200).json({ result: "no" });
  }
  return res.status(200).json({ result: "yes" });
};
