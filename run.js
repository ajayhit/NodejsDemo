// const name=require('./name');
// const fun=require('./fun');
// const another=require('./anotherway')
// require('./fsasy')


var _=require('lodash')

var item=[1,[2,[3,[4,[5]]]]]


var newitem=_.flattenDeep(item)
console.log(newitem)