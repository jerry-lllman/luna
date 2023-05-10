import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'esm',
      file: './dist/index.esm.js'
    },
    {
      format: 'cjs',
      file: './dist/index.cjs.js'
    }
  ],
  plugins: [
    peerDepsExternal({ includeDependencies: true }),
    resolve(),
    typescript({
      declaration: false
    })
  ],
  external: ['react', 'react-dom'],
};
