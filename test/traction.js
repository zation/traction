'use strict';

var chai = require('chai');
chai.should();

var traction = require('../lib/traction');

describe('traction', function() {
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

      traction.merge(object).to(array).basedOn('id').should.eql([{
        id: 1,
        name: 'liu'
      }, {
        id: 2,
        name: 'qiu'
      }]);
    });

    it('when id is not existed', function() {
      var object = {
        id: 3,
        name: 'liu'
      };
      var array = [{
        id: 1,
        name: 'yang'
      }, {
        id: 2,
        name: 'qiu'
      }];

      traction.merge(object).to(array).basedOn('id').should.eql([{
        id: 1,
        name: 'yang'
      }, {
        id: 2,
        name: 'qiu'
      }, {
        id: 3,
        name: 'liu'
      }]);
    });
  });

  it('should merge array to array based on id', function() {
    var newArray = [{
      id: 1,
      name: 'liu',
      email: 'liu@gmail.com',
      phone: {
        number: '123'
      }
    }, {
      id: 3,
      name: 'jex',
      email: 'jex@gmail.com'
    }, {
      id: 4,
      name: 'daniel',
      email: 'daniel@gmail.com'
    }];
    var oldArray = [{
      id: 1,
      name: 'yang',
      email: 'yang@gmail.com',
      list: [1, 2]
    }, {
      id: 2,
      name: 'qiu',
      email: 'qiu@gmail.com'
    }, {
      id: 4,
      name: 'qin',
      email: 'qin@gmail.com'
    }];

    traction.merge(newArray).to(oldArray).basedOn('id').should.eql([{
      id: 1,
      name: 'liu',
      email: 'liu@gmail.com',
      phone: {
        number: '123'
      },
      list: [1, 2]
    }, {
      id: 2,
      name: 'qiu',
      email: 'qiu@gmail.com'
    }, {
      id: 4,
      name: 'daniel',
      email: 'daniel@gmail.com'
    }, {
      id: 3,
      name: 'jex',
      email: 'jex@gmail.com'
    }]);
  });
});
