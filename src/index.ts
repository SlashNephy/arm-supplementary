import { arm } from '@kawaiioverflow/arm'

import { annict } from './annict'

import type { ArmEntry } from '../lib/arm'

export const entries = (): ArmEntry[] => {
  return [...arm, ...annict]
}
