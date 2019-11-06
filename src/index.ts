import { Command, CommandOptions, CommandCaller } from './command';
import run from './run';

export default (command: CommandCaller|CommandCaller[], options?: CommandOptions) => {
	return {
		name: 'run',
		generateBundle: async () => {
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
