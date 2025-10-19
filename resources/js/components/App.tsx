import { CharInput } from '@/components/CharInput'
import type { WclParse } from '@/api/wclChar'
import { ParseView } from '@/components/ParseView'
import { useLocalStorage } from '@/lib/useLocalStorage'
import { ModeToggle } from '@/components/ModeToggle'

export function App() {
  const [parses, setParses] = useLocalStorage<WclParse[] | undefined>(
    'parses',
    undefined,
  )

  const lastParse =
    parses && parses.length > 0 ? parses[parses.length - 1] : null

  return (
    <div className="px-4 max-w-[750px] mx-auto py-10">
      <div className="flex justify-between">
        <h1 className="text-2xl mb-2 font-bold">Ortemis' Parse Viewer</h1>
        <ModeToggle />
      </div>
      <CharInput setParses={setParses} />
      <div className="border-2 my-4" />
      {parses && parses.length === 0 && (
        <p>No parses found for this character.</p>
      )}
      {lastParse && <ParseView parse={lastParse} />}
    </div>
  )
}
