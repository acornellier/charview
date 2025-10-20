import { z } from "zod";
export const WclCharRequest = z.object({
    name: z.string().min(2),
    realmSlug: z.string().min(1),
    region: z.string().min(2).max(2)
});
