interface GuessFeedbackProps {
  type: "too-high" | "too-low" | "duplicate"
}

export default function GuessFeedback({ type }: GuessFeedbackProps) {
  const messages = {
    "too-high": { text: "📈 Too High! Try a lower number.", color: "bg-red-50 text-red-700 border-red-200" },
    "too-low": { text: "📉 Too Low! Try a higher number.", color: "bg-blue-50 text-blue-700 border-blue-200" },
    duplicate: { text: "🔄 You already guessed that number!", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  }

  const { text, color } = messages[type]

  return (
    <div className={`p-4 rounded-lg border ${color} animate-bounce-in mb-6`}>
      <p className="font-medium text-center">{text}</p>
    </div>
  )
}
