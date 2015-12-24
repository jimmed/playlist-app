import chalk from 'chalk';
import { inspect } from 'util';

const logger = {};

const levels = {
  log: 'white',
  info: 'green',
  warn: 'yellow',
  error: 'red',
  debug: 'gray',
};

Object.keys(levels).forEach(level => {
  logger[level] = (...args) => {
    const content = args.map(stringify).join(' ');
    process.stdout.write(chalk[levels[level]](`[${chalk.bold(level)}] ${content}\n`));
  };
});

function stringify(value) {
  switch(typeof value) {
    case 'number': return chalk.bold(value);
    case 'string': return value;
    default: return inspect(value);
  }
}

export default logger;
