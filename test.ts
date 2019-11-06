import command from './src';

command([() => console.log('hello 1'), `echo hello-2`, `node test-colors.js`], {
	exitOnFail: true,
}).writeBundle();
