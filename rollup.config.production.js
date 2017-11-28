import resolve  from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel  from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    moduleName: 'foo',
  },
  plugins: [
    resolve({
      jsnext: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(), // CommonJSモジュールをES6に変換
    babel(), // ES5に変換
  ]
}
