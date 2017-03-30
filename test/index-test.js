import pakkun from '../index';
import chai from 'chai';
const { expect } = chai;

const add = (a, b) => a + b;

describe('pakkun', () => {
  it('can spit out the result with no chain', () => {
    expect(pakkun(1)).to.equal(1);
    expect(pakkun(2)).to.equal(2);
  });

  it('can curry one function', () => {
    expect(pakkun(1, [add, 1])).to.equal(2);
  });

  it('can curry multiple functions', () => {
    expect(pakkun(1, [add, 1], [add, 2])).to.equal(4);
  });
});
