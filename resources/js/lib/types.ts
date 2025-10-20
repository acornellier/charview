export const regions = ['US', 'EU', 'KR', 'TW'] as const

export type Region = (typeof regions)[number]

export type Rarity =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'artifact'

export const rarityColors: Record<Rarity, string> = {
  common: '#9d9d9d',
  uncommon: '#1eff00',
  rare: '#0070ff',
  epic: '#a335ee',
  legendary: '#ff8000',
  artifact: '#e6cc80',
}

export interface PhpError {
  status: 'error'
  message: string
  errors: Record<string, string[]>
}
