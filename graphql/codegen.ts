import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'graphql/anilist/generated/': {
      preset: 'client',
      schema: 'graphql/anilist/schema.json',
      documents: ['graphql/anilist/*.graphql'],
      config: {
        defaultScalarType: 'unknown',
        useTypeImports: true,
        skipTypename: true,
        enumsAsTypes: true,
      },
    },
    'graphql/annict/generated/': {
      preset: 'client',
      schema: 'graphql/annict/schema.graphql',
      documents: ['graphql/annict/*.graphql'],
      config: {
        defaultScalarType: 'unknown',
        useTypeImports: true,
        skipTypename: true,
        enumsAsTypes: true,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['pnpm eslint --fix graphql/anilist/', 'pnpm eslint --fix graphql/annict/'],
  },
}

export default config
