import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function percentileColor(percentile: number) {
  if (percentile >= 95) {
    return '#ff8000'
  } else if (percentile >= 75) {
    return '#a335ee'
  } else if (percentile >= 50) {
    return '#0070ff'
  } else if (percentile >= 25) {
    return '#1eff00'
  } else {
    return '#666'
  }
}
