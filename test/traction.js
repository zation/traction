'use strict';

var chai = require('chai');
chai.should();

var utils = require('../lib/traction');

describe('utils', function() {
  describe('should merge object to array based on id', function() {
    it('when id is existed', function() {
      var object = {
        id: 1,
        name: 'liu'
      };
      var array = [{
        id: 1,
        name: 'yang'
      }, {
        id: 2,
        name: 'qiu'
      }];

      utils.merge(object).to(array).basedOn('id').should.eql([{
        id: 1,
        name: 'liu'
      }, {
        id: 2,
        name: 'qiu'
      }]);
    });
  });

  it('should merge array to array based on id', function() {
    var newArray = [{
      id: 1,
      name: 'liu',
      email: 'liu@gmail.com',
      phone: '123'
    }, {
      id: 3,
      name: 'jex',
      email: 'jex@gmail.com'
    }];
    var oldArray = [{
      id: 1,
      name: 'yang',
      email: 'yang@gmail.com'
    }, {
      id: 2,
      name: 'qiu',
      email: 'qiu@gmail.com'
    }];

    utils.merge(newArray).to(oldArray).basedOn('id').should.eql([{
      id: 1,
      name: 'liu',
      email: 'liu@gmail.com',
      phone: '123'
    }, {
      id: 2,
      name: 'qiu',
      email: 'qiu@gmail.com'
    }, {
      id: 3,
      name: 'jex',
      email: 'jex@gmail.com'
    }]);
  });
});
