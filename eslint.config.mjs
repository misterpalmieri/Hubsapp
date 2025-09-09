// eslint.config.mjs (Flat Config para ESLint v9 + TypeScript)

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // O que o ESLint deve ignorar (substitui o antigo .eslintignore)
  { ignores: ['dist/**', 'node_modules/**'] },

  // Regras recomendadas para JS
  js.configs.recommended,

  // Regras recomendadas para TypeScript (inclui parser/config adequados)
  ...tseslint.configs.recommended,

  // Regras específicas do projeto
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  }
];
