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

  it('should replace old value with new value for object', function() {
    var newObject = {
      id: 1,
      list: [],
      people: {
        name: 'Liu'
      }
    };
    var oldObject = [{
      id: 1,
      list: [1],
      people: {
        phone: 123
      }
    }];

    traction.merge(newObject).to(oldObject).basedOn('id').should.eql([{
      id: 1,
      list: [],
      people: {
        name: 'Liu'
      }
    }]);
  });

  it('should replace old value with new value for array', function() {
    var newArray = [{
      id: 1,
      list: [],
      people: {
        name: 'Liu'
      }
    }];
    var oldArray = [{
      id: 1,
      list: [1],
      people: {
        phone: 123
      }
    }];

    traction.merge(newArray).to(oldArray).basedOn('id').should.eql([{
      id: 1,
      list: [],
      people: {
        name: 'Liu'
      }
    }]);
  });

  it('should support multiple keys', function() {
    var newData = {
      name: 'yang',
      gender: 'female',
      data: 'test'
    };
    var oldArray = [{
      name: 'yang',
      gender: 'male',
      data: 'yoyo'
    }, {
      name: 'yang',
      gender: 'female',
      data: 'heihei'
    }];

    traction.merge(newData).to(oldArray).basedOn('name', 'gender').should.eql([{
      name: 'yang',
      gender: 'male',
      data: 'yoyo'
    }, {
      name: 'yang',
      gender: 'female',
      data: 'test'
    }]);
  });
});
