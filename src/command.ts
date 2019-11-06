export type CommandCaller = string | Function;
export type CommandOptions = { exitOnFail?: boolean };
export type Command = [CommandCaller, CommandOptions];
