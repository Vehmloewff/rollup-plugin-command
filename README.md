# rollup-plugin-run

Run commands and call functions sequentially when bundles are generated

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
}
```

```js
run(require('tests.js'))
```

```js
run([
	`npm test`,
	require('./scripts/cleanup')
], { quitOnFail: true }) // Default for options.quitOnDefault is false.
```

I hope you find this package usefull!

## License

[MIT](/LICENSE)
