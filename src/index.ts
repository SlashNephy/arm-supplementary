import { arm } from '@kawaiioverflow/arm'

import type { ArmEntry } from '../lib/arm'

export const entries = (): ArmEntry[] => {
  return [...arm]
}
