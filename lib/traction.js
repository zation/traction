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
              var identity;
              return _.map(_array, function(oldItem) {
                identity = _.pick(oldItem, key);
                _.remove(newItems, identity);
                return _.assign(oldItem, _.findWhere(newData, identity));
              }).concat(newItems);
            }
            else if (_.isObject(newData)) {
              var index = _.findIndex(_array, _.pick(newData, key));
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
