import { describe, it } from 'electron-mocha';
import expect from 'expect';

describe('App', () => {
  it('should be importable', () => {
    require('../dist/index.js');
  });
});
