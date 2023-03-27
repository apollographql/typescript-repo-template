import { helloWorld } from '..';
import { describe, it, expect } from '@jest/globals';

describe('helloWorld', () => {
  it('says hello', () => {
    expect(helloWorld()).toEqual('Hello World!');
  });
});
