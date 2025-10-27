"use client"

interface ResultModalProps {
  result: "win" | "lose"
  secretNumber: number
  guessCount: number
  onPlayAgain: () => void
}

export default function ResultModal({ result, secretNumber, guessCount, onPlayAgain }: ResultModalProps) {
  const isWin = result === "win"

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card rounded-2xl border border-border shadow-2xl p-8 max-w-md w-full animate-scale-in">
        {/* Icon */}
        <div className="text-6xl text-center mb-4">{isWin ? "🎉" : "😢"}</div>

        {/* Title */}
        <h2 className={`text-3xl font-bold text-center mb-2 ${isWin ? "text-green-600" : "text-red-600"}`}>
          {isWin ? "You Won!" : "Game Over"}
        </h2>

        {/* Message */}
        <p className="text-center text-muted-foreground mb-6">
          {isWin
            ? `Amazing! You guessed the number in ${guessCount} ${guessCount === 1 ? "guess" : "guesses"}.`
            : `The number was ${secretNumber}. Better luck next time!`}
        </p>

        {/* Stats */}
        <div className="bg-muted rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Secret Number</span>
            <span className="text-2xl font-bold text-primary">{secretNumber}</span>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-muted-foreground">Attempts</span>
            <span className="text-2xl font-bold text-primary">{guessCount}</span>
          </div>
        </div>

        {/* Play Again Button */}
        <button
          onClick={onPlayAgain}
          className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 active:scale-95"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
