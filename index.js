module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/parsers': {
        [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
      },
    },
    extends: [
      'plugin:react/recommended', 
      'plugin:react-hooks/recommended', 
      'standard', 
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
          },      
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react', 
      '@typescript-eslint'
    ],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          trailingComma: 'all',
          singleQuote: true,
          arrowParens: 'always',
          semi: false,
          endOfLine: 'auto',
        },
      ],
    },
  };
  