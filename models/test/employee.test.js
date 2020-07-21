const Employee = require('../employee.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {

    it('should throw an error if any of arg is missed', () => {
        const employees = [new Employee({ firstName: 'Joe', lastName: 'Doe' }), new Employee({ lastName: 'Doe', department: 'IT'}), new Employee({ firstName: 'Joe', department: 'IT'})];

        for (let employee of employees) {
            employee.validate(err => {
            expect(err.errors).to.exist;
            });
        }
    });

    it('should throw an error if arg is not a string', () => {
        const employees = [new Employee({ firstName: 'Joe', lastName: 'Doe' }), new Employee({ lastName: 'Doe', department: 'IT'}), new Employee({ firstName: 'Joe', department: 'IT'})];

        for (let employee of employees) {
            employee.validate(err => {
            expect(err.errors).to.exist;
          });
        }
      });

    it('should not throw an error if args are ok', () => {
        const employee = new Employee({ firstName: 'Joe', lastName: 'Doe', department: 'IT' });

        employee.validate(err => {
        expect(err).to.not.exist;
        });
    });

    after(() => {
        mongoose.models = {};
    });

  }); 