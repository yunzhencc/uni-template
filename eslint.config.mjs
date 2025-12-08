import antfu from '@antfu/eslint-config';

export default antfu({
  unocss: true,
  stylistic: {
    semi: true,
    indent: 2,
    quotes: 'single',
  },
  vue: true,
  ignores: [
    'tsconfig.json',
  ],
});
