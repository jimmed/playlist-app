import { describe, it } from 'mocha';
import expect from 'expect';

describe('App', () => {
  it('should be importable', () => {
    require('../src/index.js');
  });
});
