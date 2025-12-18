import dotenv from 'dotenv'
import { z } from 'zod'

const schema = z.object({
  ANNICT_ACCESS_TOKEN: z.string(),
  ARM_COMMIT_SHA: z.string().optional(),
})

export type Env = z.infer<typeof schema>

dotenv.config()
export const env = schema.parse(process.env)
