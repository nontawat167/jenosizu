//@ts-ignore
import ticTacToeAiEngine from "tic-tac-toe-ai-engine";

type GameStates = {
  winner: "X" | "O" | "";
  depth: number;
  nextBestGameState: string[];
};

export type GameResponse = {
  winner: "X" | "O" | "";
  nextState: string[];
};

export const getNextGameState = (gameState: string[]): GameResponse => {
  const gameStates: GameStates = ticTacToeAiEngine.computeMove(gameState);

  if (gameStates.depth === 0 && gameStates.winner !== "") {
    return {
      winner: gameStates.winner,
      nextState: gameStates.nextBestGameState,
    };
  }

  return {
    winner: "",
    nextState: gameStates.nextBestGameState,
  };
};
