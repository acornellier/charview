import type { PhpSuccess, Region } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import type { DefaultError } from '@tanstack/query-core'

export interface BlizzardRealm {
  id: number
  name: string
  slug: string
}

interface Response {
  realms: BlizzardRealm[]
}

export function useRealms(region: Region) {
  return useQuery<PhpSuccess<Response>, DefaultError, BlizzardRealm[]>({
    queryKey: ['realms', region],
    queryFn: () => fetchRealms(region),
    staleTime: 60 * 60 * 24, // 24 hours
    select: (data) => data.data.realms,
  })
}

async function fetchRealms(region: Region) {
  return await fetch(`/api/realms?region=${region}`).then((res) => res.json())
}
