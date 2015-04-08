'use strict';

var chai = require('chai');
chai.should();

var utils = require('../lib/traction');

describe.only('utils', function() {
  it('should merge array based on id', function() {
    var newData = [{
      id: 1,
      name: 'liu',
      email: 'liu@gmail.com',
      phone: '123'
    }, {
      id: 3,
      name: 'jex',
      email: 'jex@gmail.com'
    }];
    var oldData = [{
      id: 1,
      name: 'yang',
      email: 'yang@gmail.com'
    }, {
      id: 2,
      name: 'qiu',
      email: 'qiu@gmail.com'
    }];

    utils.merge(newData).to(oldData).basedOn('id').should.eql([{
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
