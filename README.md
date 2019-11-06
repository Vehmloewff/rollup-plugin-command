# rollup-plugin-run

Run commands and call functions when bundles are generated

## Installation

```sh
npm i -D rollup-plugin-run
```

## Usage

```js
// rollup.config.js
import run from 'rollup-plugin-run';

export default {
	// ...
	plugins: [
		// ...
		run(`node tests.js`),
	],
	// ...
};
```

```js
run(require('tests.js'));
```

```js
run(
	[
		`npm test`, // The next command will not be executed until this one is finished
		require('./scripts/cleanup'), // If this returns a promise, run will wait for it to be resolved before moving on to the next
	],
	{ quitOnFail: true }
); // Default for options.quitOnDefault is false.
```

I hope you find this package usefull!

## License

[MIT](/LICENSE)
