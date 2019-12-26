export type CommandCaller = string | Function;
export type CommandOptions = { exitOnFail?: boolean; once?: boolean; wait?: boolean };
export type Command = [CommandCaller, CommandOptions];

export const defaultCommandOptions: CommandOptions = {
	exitOnFail: false,
	wait: false,
};
