import { CommandCaller, CommandOptions } from './command';
import { spawn } from 'child_process';

export default async (command: CommandCaller, options: CommandOptions) => {
	if (typeof command === 'function') return await command();
	if (typeof command !== 'string')
		return console.error(`command must be a function or a string.  Recieved type ${typeof command}`);

	await new Promise((resolve) => {
		if (!options.wait) resolve();

		spawn(command, {
			shell: true,
			stdio: 'inherit',
		}).on('close', (code) => {
			if (options.exitOnFail && code !== 0) {
				console.error(`Error: Command exited with ${code}`);
				process.exit(1);
			} else {
				resolve();
			}
		});
	});
};
