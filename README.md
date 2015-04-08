# traction

Help flux store to merge new data trigger from action, for example: API, user interface, local storage...
This tool will make your store management super easy by one line code: `traction.merge(newData).to(array).basedOn('id');`

##  Install

Install with [npm](https://www.npmjs.com/package/traction)

```bash
npm install --save traction
```

## Examples

### Merge object to array

Say we have an UsersStore, and we fetch one user from API:

```js
var traction = require('traction');
var users = [{
    id: 1,
    name: 'a'
}];

var onFetchOneUserSuccess = function(newUser) {
    users = traction.merge(newUser).to(users).basedOn('id');
};

onFetchOneUserSuccess({
    id: 1,
    name: 'b'
});
onFetchOneUserSuccess({
    id: 2,
    name: 'c'
});
console.log(users);
```

The output should be:

```js
[{
    id: 1,
    name: 'b'
}, {
    id: 2,
    name: 'c'
}]
```

### Merge array to array

Say we have an UsersStore, and we fetch multiple users from API:

```js
var traction = require('traction');
var users = [{
    id: 1,
    name: 'a'
}, {
    id: 2,
    name: 'b'
}];

var onFetchOneUserSuccess = function(newUsers) {
    users = traction.merge(newUsers).to(users).basedOn('id');
};

onFetchOneUserSuccess({
    id: 2,
    name: 'c'
}, {
    id: 3,
    name: 'd'
});
console.log(users);
```

The output should be:

```js
[{
    id: 1,
    name: 'a'
}, {
    id: 2,
    name: 'c'
}, {
    id: 3,
    name: 'd'
}]
```

**NOTICE**: the merge is deeply merge.