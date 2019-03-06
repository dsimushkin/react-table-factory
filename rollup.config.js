import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import fs from 'fs';
import path from 'path';

import pkg from './package.json'

// simple file copy plugin
const copyPlugin = ({src, targ}) => ({
    generateBundle() {
        if (fs.existsSync(src))
        {
            const targDir = path.dirname(targ);
            if (!fs.existsSync(targDir)) fs.mkdirSync(targDir);
            fs.writeFileSync(targ, fs.readFileSync(src));
        }
    }
})

const exports = fs.readdirSync('./src')
.filter(file => /\.js$/.test(file))
.map((file) => ({
    input: `src/${file}`,
    output: [
        {
            format: 'cjs',
            file: `dist/${file}`,
        },
        // {
        //     format: 'umd',
        //     name: file.replace(/\.js$/, ''),
        //     file: `dist/${file}`,
        //     globals: {
        //       react: 'React',
        //     },
        // }
    ],
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
        resolve(),
        babel({
            exclude: "node_modules/**"
        }),
        copyPlugin({
            src: `./src/${file.replace(/\.js$/, '.css')}`,
            targ: `./dist/${file.replace(/\.js$/, '.css')}`
        })
    ],
}))

export default exports;