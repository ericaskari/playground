import chalk from 'chalk';
import { Service } from 'typedi';

@Service()
export class LoggerHelper {
  pre = '- ';
  before = '\n';
  after = '\n';
  wrapper = '--------------------------';

  get = (input: string, space?: boolean, wrap?: boolean): string => {
    return `${space ? this.before : ''}${wrap ? this.wrapper + '\n' : ''}${this.pre} ${input}${
      wrap ? '\n' + this.wrapper : ''
    } ${space ? this.after : ''}`;
  };
  logWhite = (input: string, space = false, wrap = false): void => {
    console.log(this.get(input, space, wrap));
  };
  logRed = (input: string, space = false, wrap = false): void => {
    console.log(chalk.red(this.get(input, space, wrap)));
  };
  logGreen = (input: string, space = false, wrap = false): void => {
    console.log(chalk.green(this.get(input, space, wrap)));
  };
  logCyan = (input: string, space = false, wrap = false): void => {
    console.log(chalk.cyan(this.get(input, space, wrap)));
  };
}
