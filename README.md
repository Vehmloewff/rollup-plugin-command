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
		command(`node tests.js`, options),
	],
	// ...
};
```

The [options](#options) are, of course, optional.

```js
command(require('tests.js'));
```

```js
command(
	[
		`npm test`, // The next command will not be executed until this
		// one is finished.

		require('./scripts/cleanup').someFunc, // If this returns a
		// promise, and `options.wait` is true (it's false by default), this
		// plugin will wait for it to be resolved before moving on to the
		// next command or finishing the build.
	],
	{ exitOnFail: true }
); // Default for options.exitOnFail is false.
```

### options

```ts
interface CommandOptions {
	exitOnFail?: boolean; // (Only applies when one of the given commands
	// is a string) Exit the current process when the child process fails.
	// Default is false.

	once?: boolean; // (Only valid when rollup is in watch mode) If the
	// commands should be executed only the first time a bundle is built.
	// Default is false.

	wait?: boolean; // If the the build should wait for the commands to
	// be executed.  Default is false.
}
```

I hope you find this package usefull!

## License

[MIT](/LICENSE)
