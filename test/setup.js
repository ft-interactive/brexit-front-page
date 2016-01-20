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
    ]
});
