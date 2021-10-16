import { Request, Response } from "express";
import { getNextGameState } from "../service/tictactoe.service";
import { GameResponse } from "../service/tictactoe.service";

export const tictactoeHandler = (req: Request, res: Response) => {
  const gameState = req.body.state;
  const gameRes: GameResponse = getNextGameState(gameState);

  return res.status(200).json(gameRes);
};
