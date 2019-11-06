import { Command, CommandOptions } from './command';
declare const _default: (command: string | Function | Command[], options?: CommandOptions) => {
    name: string;
    generateBundle: () => Promise<void>;
};
export default _default;
