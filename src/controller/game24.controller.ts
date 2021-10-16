import { Request, Response } from "express";
import solve24game from '24game-solver';

export const game24Handler = (req: Request, res: Response) => {
  return res.send("game24");
};
