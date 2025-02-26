"use client"

import Image from "next/image"
import { useState } from "react"

interface Team {
  name: string
  logo: string
}

interface Game {
  id: number
  homeTeam: Team
  awayTeam: Team
  time: string
  score: { home: number; away: number }
}

export default function GameCard({ game }: { game: Game }) {
  const [homeWinProbability, setHomeWinProbability] = useState<number | null>(null)

  const calculateProbability = () => {
    // This is a simplified probability calculation
    // In a real scenario, you'd use more complex algorithms and historical data
    const random = Math.random()
    setHomeWinProbability(random)
  }

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Image src={game.homeTeam.logo || "/placeholder.svg"} alt={game.homeTeam.name} width={50} height={50} />
          <span className="ml-2 font-semibold">{game.homeTeam.name}</span>
        </div>
        <span className="text-xl font-bold">VS</span>
        <div className="flex items-center">
          <span className="mr-2 font-semibold">{game.awayTeam.name}</span>
          <Image src={game.awayTeam.logo || "/placeholder.svg"} alt={game.awayTeam.name} width={50} height={50} />
        </div>
      </div>
      <div className="text-center mb-4">
        <span className="font-semibold">{game.time}</span>
        <span className="mx-2">|</span>
        <span className="font-semibold">
          {game.score.home} - {game.score.away}
        </span>
      </div>
      <button
        onClick={calculateProbability}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Calculate Win Probability
      </button>
      {homeWinProbability !== null && (
        <div className="mt-4 text-center">
          <p className="font-semibold">
            {game.homeTeam.name} win probability: {(homeWinProbability * 100).toFixed(2)}%
          </p>
          <p className="font-semibold">
            {game.awayTeam.name} win probability: {((1 - homeWinProbability) * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  )
}

