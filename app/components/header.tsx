export default function Header() {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-3">Number Guesser</h1>
      <p className="text-lg text-muted-foreground max-w-md mx-auto">
        I'm thinking of a number between 1 and 100. Can you guess it?
      </p>
    </div>
  )
}
