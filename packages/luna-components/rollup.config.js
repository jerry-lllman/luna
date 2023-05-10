import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'esm',
      file: './dist/index.mjs'
    },
    {
      format: 'cjs',
      file: './dist/index.cjs.js'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      compilerOptions: {
        declaration: false
      }
    })
  ],
  external: ['react', 'react-dom', 'lodash-es'],
};
