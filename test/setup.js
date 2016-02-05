// modules that need to be compiled by babel
const es6Modules = ['next-myft-ui', 'n-image'];

require('babel-register')({
    plugins: [
        'add-module-exports',
        'array-includes',
        'transform-es2015-destructuring',
        'transform-es2015-modules-commonjs',
        'transform-es2015-parameters',
        'transform-es2015-spread'
    ],
    presets: [
        'react'
    ],
    ignore: filename =>
        filename.includes('/node_modules/') && !es6Modules.some(module => filename.includes(`/node_modules/${module}`))
});
