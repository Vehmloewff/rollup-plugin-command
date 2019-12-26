import { CommandOptions, CommandCaller, defaultCommandOptions } from './command';
import run from './run';

export default (command: CommandCaller | CommandCaller[], options?: CommandOptions) => {
	options = Object.assign({}, options, defaultCommandOptions);
	console.log(options);

	let called = false;

	return {
		name: 'command',
		writeBundle: async () => {
			if (called && options.once) return;

			called = true;

			let inputs: CommandCaller[] = [];

			if (!Array.isArray(command)) {
				inputs[0] = command;
			} else {
				inputs = command;
			}

			for (let i in inputs) {
				await run(inputs[i], options);
			}
		},
	};
};
