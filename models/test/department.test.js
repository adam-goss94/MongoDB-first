const Department = require('../department.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Department', () => {

  it('should throw an error if no "name" arg', () => {
    const dep = new Department({}); // create new Department, but don't set `name` attr value

    dep.validate(err => {
      expect(err.errors.name).to.exist;
    });

  });

  it('should throw an error if "name" is not a string', () => {

    const cases = [{}, []];
    for(let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });

    }

  });

  it('should throw an error if "name" length is less than 5 and more than 20', () => {

    const cases = ['ABC', 'abcd', 'Lorem Ipsum Dolor si amet'];
    for(let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });

    }

  });

  it('should not throm an error if "name" is okay', () => {

    const cases = ['Testing', 'Graphic Department'];
    for(let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err).to.not.exist;
      });

    }

  });

  after(() => {
    mongoose.models = {};
  });

}); 