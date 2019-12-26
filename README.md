# rollup-plugin-command

Run commands and call functions when bundles are generated

## Installation

```sh
npm i -D rollup-plugin-command
```

## Usage

```js
// rollup.config.js
import command from 'rollup-plugin-command';

export default {
	// ...
	plugins: [
		// ...
		command(`node tests.js`),
	],
	// ...
};
```

```js
command(require('tests.js'));
```

```js
command(
	[
		`npm test`, // The next command will not be executed until this one is finished
		require('./scripts/cleanup'), // If this returns a promise, this plugin will wait for it to be resolved before moving on to the next
	],
	{ exitOnFail: true }
); // Default for options.exitOnFail is false.
```

I hope you find this package usefull!

## License

[MIT](/LICENSE)
