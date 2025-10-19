import { useState } from 'react'
import { type Region, regions } from '../lib/types'
import { useRealms } from '../api/fetchRealms'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/Button'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { ChevronDownIcon, Loader } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { fetchWclParses, type WclParse } from '@/api/wclChar'
import { useLocalStorage } from '@/lib/useLocalStorage'

interface Props {
  setParses: (parses: WclParse[]) => void
}

export function CharInput({ setParses }: Props) {
  const [regionOpen, setRegionOpen] = useState(false)
  const [realmOpen, setRealmOpen] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [region, setRegion] = useLocalStorage<Region>('region', 'US')
  const [realmSlug, setRealmSlug] = useLocalStorage<string>('realm', 'zuljin')
  const [name, setName] = useLocalStorage<string>('name', 'Ortemist')
  const dataComplete = region && realmSlug && name

  const { data: realms } = useRealms(region)

  const handleClick = async () => {
    if (!dataComplete) return
    setLoading(true)
    try {
      const parses = await fetchWclParses({ region, realmSlug, name })
      setParses(parses)
      setError(null)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form className="flex gap-2 flex-wrap" onSubmit={handleClick}>
        <Popover open={regionOpen} onOpenChange={setRegionOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-[100px] justify-between"
            >
              {region}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Select a region..." />
              <CommandList>
                <CommandGroup>
                  {regions.map((region) => (
                    <CommandItem
                      key={region}
                      value={region}
                      onSelect={(value) => {
                        setRegion(value as Region)
                        setRealmSlug('')
                        setRegionOpen(false)
                      }}
                    >
                      {region}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover open={realmOpen} onOpenChange={setRealmOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-[200px] justify-between"
              disabled={realms === undefined}
            >
              {realms?.find(({ slug }) => slug === realmSlug)?.name ??
                'Select a realm'}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Select a realm..." />
              <CommandList>
                <CommandGroup>
                  {realms
                    ?.toSorted((a, b) => a.name.localeCompare(b.name))
                    .map((r) => (
                      <CommandItem
                        key={r.slug}
                        value={r.slug}
                        onSelect={(value) => {
                          setRealmSlug(value)
                          setRealmOpen(false)
                        }}
                      >
                        {r.name}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Input
          className="w-[200px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          onClick={handleClick}
          disabled={loading || !dataComplete}
          className="w-20"
        >
          {loading ? (
            <Loader className="h-5 w-5 mr- animate-spin text-muted" />
          ) : (
            'Fetch'
          )}
        </Button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}
