import { z } from 'zod'

export const WclCharRequest = z.object({
  name: z.string().min(2),
  realmSlug: z.string(),
  region: z.string(),
})

export type WclCharRequest = z.infer<typeof WclCharRequest>
