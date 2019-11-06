import run from './src';

run([
	() => console.log('hello 1'),
	`echo hello-2`,
	`node test-colors.js`,
], {
	exitOnFail: true
}).generateBundle();
