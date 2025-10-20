import type { PhpError, Rarity, Region } from '@/lib/types'
import type { WowClass } from '@/lib/classes'

export interface Gem {
  id: string
  itemLevel: string
}

export interface Gear {
  name: string
  quality: Rarity
  bonusIDs: string[]
  gems: Gem[]
  icon: string
  id: number
  itemLevel: string
}

export interface WclParse {
  characterID: number
  characterName: string
  class: WowClass
  difficulty: number
  duration: number
  encounterID: number
  encounterName: string
  fightID: number
  gear: Gear[]
  ilvlKeyOrPatch: number
  outOf: number
  percentile: number
  rank: number
  reportID: string
  server: string
  size: number
  spec: string
  startTime: number
  total: number
}

type Response = WclParse[]

interface Props {
  region: Region
  realmSlug: string
  name: string
}

export async function fetchWclParses({
  region,
  realmSlug,
  name,
}: Props): Promise<Response | PhpError> {
  return await fetch(
    `/api/wclchar?region=${region}&realmSlug=${realmSlug}&name=${name}`,
  ).then(async (res) => {
    return await res.json()
  })
}
