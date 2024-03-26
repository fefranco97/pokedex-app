import { useEffect, useState } from 'react'
import './App.css'
import PokemonCards from './components/Pokemon/PokemonCard'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [searchName, setSearchName] = useState('')
  const [filters, setFilters] = useState<Filters>([[], [], []])
  const [orderBy, setOrderBy] = useState<OrderBy>({ id: 'asc' })

  useEffect(() => {
    if (!inputValue) {
      setSearchName('')
    }
  }, [inputValue])

  return (
    <div className="min-h-dvh lg:px-16 px-4 py-8">
      <div className="max-w-7xl mx-auto grid gap-10">
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4">
          <div className="lg:ml-auto md:flex-row flex-col md:items-center gap-y-2 gap-x-4 flex"></div>
        </div>
        <div className="flex justify-between items-center"></div>
        <div className="relative grid grid-cols-4">
          <PokemonCards id={1} name="bulbasaur" type={['grass', 'poison']} />
        </div>
      </div>
    </div>
  )
}

export default App
