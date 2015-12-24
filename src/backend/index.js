import { EventEmitter } from 'events';
import logger from '../util/logger';

export default class Backend extends EventEmitter {
  constructor({ emitter = {}, ...opts } = {}) {
    super(emitter);
    this.opts = opts;
  }

  get logger() {
    return logger;
  }

  open() {
    throw new Error('Backend.open is an abstract method and cannot be called.');
  }

  quit() {
    throw new Error('Backend.quit is an abstract method and cannot be called');
  }
}
