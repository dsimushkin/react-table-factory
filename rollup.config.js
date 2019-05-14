import resolve from 'rollup-plugin-node-resolve';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';
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
    input: `src/index.ts`,
    output: [
        {
            format: 'cjs',
            file: pkg.main
            // sourcemap: 'inline'
        },
        // {
        //     format: 'umd',
        //     name: 'ReactTableFactory',
        //     file: `dist/index.js`,
        //     globals: {
        //       react: 'React',
        //     },
        // }
    ],
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
        resolve(),
        tslint(),
        typescript(),
        // copyCssPlugin
    ]
}

export default exports;