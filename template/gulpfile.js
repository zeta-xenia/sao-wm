const { parallel, watch } = require('gulp');
const { rollup } = require('rollup');
const { terser } = require('rollup-plugin-terser');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const rollupOutputConfig = require('./rollup.config.json');

const umd = async function () {
	const bundle = await rollup({
		input: './src/index.js',
		plugins: [
			resolve(),
			commonjs(),
			babel(),
			terser()
		]
	});

	await bundle.write(rollupOutputConfig.umdOutput)
}

const esm = async function () {
	const bundle = await rollup({
		input: './src/index.js',
		plugins: [
			resolve(),
			commonjs(),
			builtins(),
			babel(),
			terser()
		]
	});

	await bundle.write(rollupOutputConfig.esmOutput)
}

exports.esm = esm;
exports.umd = umd;
exports.default = parallel(umd, esm);
exports.watch = () => {
	watch('src/*.js', { ignoreInitial: false }, parallel(umd, esm))
}
