import Image from "next/image"
import { Button } from "/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Navigation */}
      <nav className="bg-[#0066B2] p-4">
        <div className="container mx-auto flex items-center">
          <Image src="/placeholder.svg?height=40&width=40" alt="NBA" width={40} height={40} className="mr-4" />
          <div className="flex gap-8">
            <button className="border-b-2 border-white px-2 py-1">GAMES</button>
            <button className="px-2 py-1 hover:border-b-2 hover:border-white">STANDINGS</button>
            <button className="px-2 py-1 hover:border-b-2 hover:border-white">STATS</button>
            <button className="px-2 py-1 hover:border-b-2 hover:border-white">PLAYERS</button>
          </div>
        </div>
      </nav>

      {/* Games Grid */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Game 1 */}
          <div className="border border-gray-800 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="Magic" width={30} height={30} />
                <span>Magic</span>
                <span className="text-xl">82</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400">Final</span>
                <span className="text-sm text-gray-400">Today</span>
                <Button className="bg-[#0066B2] hover:bg-[#0066B2]/90 mt-2">GAME STORY</Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">74</span>
                <span>Pelicans</span>
                <Image src="/placeholder.svg?height=30&width=30" alt="Pelicans" width={30} height={30} />
              </div>
            </div>
          </div>

          {/* Game 2 */}
          <div className="border border-gray-800 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="Grizzlies" width={30} height={30} />
                <span>Grizzlies</span>
                <span className="text-xl">112</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-green-500">Q4 - 09:18</span>
                <Button className="bg-[#0066B2] hover:bg-[#0066B2]/90 mt-2">LIVE HIGHLIGHTS</Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">88</span>
                <span>Rockets</span>
                <Image src="/placeholder.svg?height=30&width=30" alt="Rockets" width={30} height={30} />
              </div>
            </div>
          </div>

          {/* Game 3 */}
          <div className="border border-gray-800 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="Lakers" width={30} height={30} />
                <span>Lakers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400">Today</span>
                <span className="text-sm text-gray-400">9:00 PM</span>
                <Button className="bg-[#0066B2] hover:bg-[#0066B2]/90 mt-2">GAME PREVIEW</Button>
              </div>
              <div className="flex items-center gap-4">
                <span>Warriors</span>
                <Image src="/placeholder.svg?height=30&width=30" alt="Warriors" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>

        {/* Time Zone Info */}
        <div className="mt-6 text-sm text-gray-400">All times are in Central Standard Time</div>

        {/* See More Button */}
        <div className="flex justify-center mt-4">
          <Button variant="outline" className="text-gray-400 border-gray-800">
            See more
          </Button>
        </div>
      </div>
    </main>
  )
}

