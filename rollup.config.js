import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import fs from 'fs';
import path from 'path';

import pkg from './package.json'

const copyCssPlugin = {
    generateBundle() {
        fs.readdirSync('./src')
        .filter(file => /\.css$/.test(file))
        .forEach((file) => {
            const src = './src/'+file;
            const targ = './styles/'+file;
            const targDir = path.dirname(targ);
            if (!fs.existsSync(targDir)) fs.mkdirSync(targDir);
            fs.writeFileSync(targ, fs.readFileSync(src));
        })
    }
}

const exports = {
    input: `src/index.js`,
    output: [
        {
          file: pkg.main,
          format: "cjs",
          exports: "named",
          sourcemap: true
        },
        {
          file: pkg.module,
          format: "es",
          exports: "named",
          sourcemap: true
        },
    ],
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
        resolve(),
        babel({
            exclude: "node_modules/**",
            runtimeHelpers: true
        }),
        copyCssPlugin
    ]
}

export default exports;