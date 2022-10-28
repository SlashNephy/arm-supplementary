import dotenv from 'dotenv'

dotenv.config()

export type Env = NodeJS.ProcessEnv & {
  ANNICT_ACCESS_TOKEN?: string
  ARM_COMMIT_SHA?: string
}

export const env = process.env as Env
