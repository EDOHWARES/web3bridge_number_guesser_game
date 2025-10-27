"use client"

import { useState } from "react";
import Header from "./components/header";
import DifficultySelect from "./components/difficulty-select";
import GameBoard from "./components/game-board";
import ResultModal from "./components/result-modal";

export default function Home() {
  const [gameState, setGameState] = useState<"difficulty" | "playing" | "finished">("difficulty")
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium")
  const [secretNumber, setSecretNumber] = useState(0)
  const [guesses, setGuesses] = useState<number[]>([])
  const [maxGuesses, setMaxGuesses] = useState(10)
  const [gameResult, setGameResult] = useState<"win" | "lose" | null>(null)

  const difficultyConfig = {
    easy: { guesses: 15, label: "Easy (15 guesses)" },
    medium: { guesses: 10, label: "Medium (10 guesses)" },
    hard: { guesses: 5, label: "Hard (5 guesses)" },
  }

  const startGame = (selectedDifficulty: "easy" | "medium" | "hard") => {
    setDifficulty(selectedDifficulty)
    const config = difficultyConfig[selectedDifficulty]
    setMaxGuesses(config.guesses)
    setSecretNumber(Math.floor(Math.random() * 100) + 1)
    setGuesses([])
    setGameResult(null)
    setGameState("playing")
  }

  const handleGuess = (guess: number) => {
    if (guess < 1 || guess > 100) return
    if (guesses.includes(guess)) return

    const newGuesses = [...guesses, guess]
    setGuesses(newGuesses)

    if (guess === secretNumber) {
      setGameResult("win")
      setGameState("finished")
    } else if (newGuesses.length >= maxGuesses) {
      setGameResult("lose")
      setGameState("finished")
    }
  }

  const playAgain = () => {
    setGameState("difficulty")
    setGuesses([])
    setGameResult(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted flex flex-col items-center justify-center p-4">
      <Header />

      {gameState === "difficulty" && <DifficultySelect onSelectDifficulty={startGame} />}

      {gameState === "playing" && (
        <GameBoard
          secretNumber={secretNumber}
          guesses={guesses}
          maxGuesses={maxGuesses}
          onGuess={handleGuess}
          difficulty={difficulty}
        />
      )}

      {gameState === "finished" && gameResult && (
        <ResultModal
          result={gameResult}
          secretNumber={secretNumber}
          guessCount={guesses.length}
          onPlayAgain={playAgain}
        />
      )}
    </main>
  )
}
