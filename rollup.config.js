import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs     from 'rollup-plugin-commonjs'
import babel        from 'rollup-plugin-babel'

export default {
  input: './src/input.js',
  output: {
    file: './dist/bundle.js',
    format: 'iife',
    moduleName: 'foo'
  },
  plugins: [
    nodeResolve({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
    commonjs(), // CommonJSモジュールをES6に変換
    babel() // ES5に変換
  ]
}
