export declare type CommandCaller = string | Function;
export declare type CommandOptions = {
    exitOnFail?: boolean;
};
export declare type Command = [CommandCaller, CommandOptions];
