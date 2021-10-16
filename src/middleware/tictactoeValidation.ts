import e, { Request, Response, NextFunction } from "express";

export const tictactoe = (req: Request, res: Response, next: NextFunction) => {
  const gameState = req.body.state;

  if (!Array.isArray(gameState)) {
    return res.status(400).json({ error: "Error game state type." });
  }

  if (gameState.length !== 9) {
    return res.status(400).json({ error: "invalid game state form" });
  }

  const hasInvalidBoard = gameState.some((el) => {
    return el !== "O" && el !== "X" && el !== "";
  });

  if (hasInvalidBoard) {
    return res.status(400).json({ error: "invalid game board" });
  }

  next();
};
