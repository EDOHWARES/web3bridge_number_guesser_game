"use client"

interface DifficultySelectProps {
  onSelectDifficulty: (difficulty: "easy" | "medium" | "hard") => void
}

export default function DifficultySelect({ onSelectDifficulty }: DifficultySelectProps) {
  const difficulties = [
    { level: "easy" as const, label: "Easy", guesses: 15, description: "15 guesses" },
    { level: "medium" as const, label: "Medium", guesses: 10, description: "10 guesses" },
    { level: "hard" as const, label: "Hard", guesses: 5, description: "5 guesses" },
  ]

  return (
    <div className="w-full max-w-2xl animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Choose Your Difficulty</h2>
        <p className="text-muted-foreground">More guesses = easier game</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {difficulties.map(({ level, label, description }) => (
          <button
            key={level}
            onClick={() => onSelectDifficulty(level)}
            className="group relative p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-2">{label}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
