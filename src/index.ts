import { arm } from '@kawaiioverflow/arm'

import { autumn2022 } from './autumn2022'

import type { ArmEntry } from '../lib/arm'

export const entries = (): ArmEntry[] => {
  return [...arm, ...autumn2022]
}
