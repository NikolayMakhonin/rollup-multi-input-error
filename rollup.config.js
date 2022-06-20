import commonjs from '@rollup/plugin-commonjs'
import del from 'rollup-plugin-delete'

export default {
  cache: false,
  input: {
    'func1'       : 'src/func1.js',
    'nested/func2': 'src/nested/func2.js',
  },
  output: {
    dir           : 'dist',
    format        : 'es',
  },
  plugins: [
    del({targets: 'dist'}),
    commonjs(),
  ],
}
