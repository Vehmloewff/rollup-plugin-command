import command from './src';

const fn = command([() => console.log('hello 1'), `echo hello-2`, `node test-colors.js`], {
	exitOnFail: true,
	wait: false,
});

const caller = async () => {
	await fn.writeBundle();
	await fn.writeBundle();
};
caller();
