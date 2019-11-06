import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import execute from 'rollup-plugin-execute';
import typescript from 'rollup-plugin-typescript';

const sourcemap = true;
const prod = process.env.NODE_ENV === 'production';
const test = process.env.NODE_ENV === 'test';

const sharedOutputOptions = {
	sourcemap,
};

const output = { file: 'dist/index.js', format: prod ? 'esm' : 'cjs', ...sharedOutputOptions };

export default {
	input: prod ? 'src/index.ts' : 'test.ts',
	output,
	external: ['child_process'],
	plugins: [
		resolve({
			preferBuiltins: true,
		}),
		commonjs(),
		!prod && !test && execute(`node dist/index.js`),
		typescript({
			typescript: require('typescript'),
		}),
	],
};
