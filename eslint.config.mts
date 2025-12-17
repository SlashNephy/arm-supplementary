// eslint-disable-next-line n/no-unpublished-import
import { config } from '@slashnephy/eslint-config'

export default config({
  ignores: ['dist/', 'graphql/*/schema.graphql', 'graphql/*/generated/*.ts', 'src/*.ts', '!src/index.ts'],
})
