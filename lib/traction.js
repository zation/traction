'use strict';

var _ = require('lodash');

module.exports = {
  merge: function(newData) {
    return {
      to: function(array) {
        var _array = _.cloneDeep(array);
        return {
          basedOn: function() {
            var keys = arguments;
            if (_.isArray(newData)) {
              var newItems = _.clone(newData);
              var identity;
              return _.map(_array, function(oldItem) {
                identity = _.pick(oldItem, keys);
                _.remove(newItems, identity);
                return _.assign(oldItem, _.findWhere(newData, identity));
              }).concat(newItems);
            }
            else if (_.isObject(newData)) {
              var index = _.findIndex(_array, _.pick(newData, keys));
              if (index >= 0) {
                _.assign(_array[index], newData);
              } else {
                _array.push(newData);
              }

              return _array;
            }
          }
        };
      }
    };
  }
};
