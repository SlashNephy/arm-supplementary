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
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['yarn prettier --write graphql/anilist/', 'yarn prettier --write graphql/annict/'],
  },
}

export default config
