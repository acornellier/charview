import { ZamIcon } from './ZamIcon'
import { classSpecs, type WowClass, type WowSpec } from '@/lib/classes'

interface Props {
  wowClass: WowClass
  spec: WowSpec
  size: number
  className?: string
}

export function SpecIcon({ wowClass, spec, size, className }: Props) {
  return (
    <ZamIcon
      className={`rounded ${className}`}
      icon={`${classSpecs[wowClass][spec]!.icon}.jpg`}
      size={size}
      alt={spec}
    />
  )
}
