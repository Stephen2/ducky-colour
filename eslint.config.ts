import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig(
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
  },

  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowNullableObject: false,
        },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      'prettier/prettier': 'error',
    },
  },

  eslintConfigPrettier,
);
