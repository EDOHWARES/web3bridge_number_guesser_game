interface GuessHistoryProps {
  guesses: number[]
  secretNumber: number
}

export default function GuessHistory({ guesses, secretNumber }: GuessHistoryProps) {
  const sortedGuesses = [...guesses].sort((a, b) => a - b)

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3">Your Guesses</h3>
      <div className="flex flex-wrap gap-2">
        {sortedGuesses.map((guess) => {
          const isCorrect = guess === secretNumber
          const isTooHigh = guess > secretNumber

          return (
            <div
              key={guess}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                isCorrect
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : isTooHigh
                    ? "bg-red-100 text-red-700 border border-red-300"
                    : "bg-blue-100 text-blue-700 border border-blue-300"
              }`}
            >
              {guess}
            </div>
          )
        })}
      </div>
    </div>
  )
}
