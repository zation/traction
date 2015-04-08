'use strict';

var _ = require('lodash');

module.exports = {
  merge: function(newData) {
    return {
      to: function(oldData) {
        return {
          basedOn: function(key) {
            if (_.isArray(newData)) {
              var newItems = _.clone(newData);
              return _.map(oldData, function(oldItem) {
                var index = _.findIndex(newData, _.pick(oldItem, key));
                if (index >= 0) {
                  newItems.splice(index, 1);
                }

                return _.merge(oldItem, newData[index]);
              }).concat(newItems);
            }
          }
        };
      }
    };
  }
};
