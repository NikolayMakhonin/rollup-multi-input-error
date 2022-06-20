import commonjs from '@rollup/plugin-commonjs'

export default {
  cache: false,
  input: {
    'func1'       : 'src/func1.js',
    'nested/func2': 'src/nested/func2.js',
  },
  output: {
    dir           : 'dist',
    format        : 'cjs',
    exports       : 'named',
    entryFileNames: '[name].js',
    chunkFileNames: '[name].js',
    // preserveModules: true,
    // preserveModulesRoot: 'src',
    // minifyInternalExports: true,
  },
  plugins: [
    commonjs(),
  ],
}
