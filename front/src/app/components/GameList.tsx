import GameCard from "./GameCard"

const games = [
  {
    id: 1,
    homeTeam: { name: "Lakers", logo: "/placeholder.svg?height=50&width=50" },
    awayTeam: { name: "Celtics", logo: "/placeholder.svg?height=50&width=50" },
    time: "19:30",
    score: { home: 0, away: 0 },
  },
  {
    id: 2,
    homeTeam: { name: "Warriors", logo: "/placeholder.svg?height=50&width=50" },
    awayTeam: { name: "Nets", logo: "/placeholder.svg?height=50&width=50" },
    time: "20:00",
    score: { home: 0, away: 0 },
  },
  // Add more games as needed
]

export default function GameList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

