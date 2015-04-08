'use strict';

var _ = require('lodash');

module.exports = {
  merge: function(newData) {
    return {
      to: function(array) {
        var _array = _.cloneDeep(array);
        return {
          basedOn: function(key) {
            if (_.isArray(newData)) {
              var newItems = _.clone(newData);
              return _.map(_array, function(oldItem) {
                var index = _.findIndex(newData, _.pick(oldItem, key));
                if (index >= 0) {
                  newItems.splice(index, 1);
                }

                return _.merge(oldItem, newData[index]);
              }).concat(newItems);
            }
            else if (_.isObject(newData)) {
              var index = _.findIndex(_array, _.pick(newData, key));
              if (index >= 0) {
                _.merge(_array[index], newData);
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
