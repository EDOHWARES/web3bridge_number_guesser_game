"use client"

import type React from "react"

import { useState } from "react"
import GuessFeedback from "./guess-feedback"
import GuessHistory from "./guess-history"

interface GameBoardProps {
  secretNumber: number
  guesses: number[]
  maxGuesses: number
  onGuess: (guess: number) => void
  difficulty: "easy" | "medium" | "hard"
}

export default function GameBoard({ secretNumber, guesses, maxGuesses, onGuess, difficulty }: GameBoardProps) {
  const [inputValue, setInputValue] = useState("")
  const [feedback, setFeedback] = useState<"too-high" | "too-low" | "duplicate" | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const guess = Number.parseInt(inputValue, 10)

    if (isNaN(guess) || guess < 1 || guess > 100) {
      setFeedback(null)
      return
    }

    if (guesses.includes(guess)) {
      setFeedback("duplicate")
      setInputValue("")
      return
    }

    if (guess > secretNumber) {
      setFeedback("too-high")
    } else if (guess < secretNumber) {
      setFeedback("too-low")
    }

    onGuess(guess)
    setInputValue("")
  }

  const remainingGuesses = maxGuesses - guesses.length
  const guessPercentage = (guesses.length / maxGuesses) * 100

  return (
    <div className="w-full max-w-2xl animate-fade-in">
      <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
        {/* Guesses Remaining */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-muted-foreground">Guesses Remaining</span>
            <span className="text-2xl font-bold text-primary">{remainingGuesses}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${guessPercentage}%` }} />
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-3">
            <input
              type="number"
              min="1"
              max="100"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a number (1-100)"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 active:scale-95"
            >
              Guess
            </button>
          </div>
        </form>

        {/* Feedback */}
        {feedback && <GuessFeedback type={feedback} />}

        {/* Guess History */}
        {guesses.length > 0 && <GuessHistory guesses={guesses} secretNumber={secretNumber} />}

        {/* Difficulty Badge */}
        <div className="mt-8 pt-6 border-t border-border">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mode
          </span>
        </div>
      </div>
    </div>
  )
}
