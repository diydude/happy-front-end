// 01-is-plain-object.js

/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */

export const isPlainObject = (element) => {
  throw new Error(` ${element}`);
};

// 02-make-pairs.js

/**
 * Task description: Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Task complexity: 1 of 5
 * @param {Object} object - Any object to transform into array
 * @returns {Array} - a deep array
 */

export const makePairs = (object) => {
  throw new Error(`put your solution here ${object}`);
};

// 03-without.js

/**
 * Task description: Write a method that returns a new object without provided properties
 * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * Task complexity: 2 of 5
 * @param {Object} object - Any object
 * @param {?} args - list of properties to remove from object
 * @returns {Object} - New object without listed values
 */

export const without = (object, ...args) => {
  throw new Error(`put your solution here ${object} ${args}`);
};

// 04-is-empty.js

/**
 * Task description: Write a method that makes a shallow check is object empty
 * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
 * Empty values: '', null, NaN, undefined
 * Task complexity: 2 of 5
 * @param {Object} object - Object with values of primitive data types
 * @returns {boolean}
 */

export const isEmpty = (object) => {
  throw new Error(`put your solution here ${object}`);
};

// 05-is-equal.js

/**
 * Task description: Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Task complexity: 2 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */

export const isEqual = (firstObj, secondObj) => {
  throw new Error(`put your solution here ${firstObj} ${secondObj}`);
};

// 06-invoke.js

/**
 * Task description: Write a method that invokes an array method on a specific path
 * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * Task complexity: 3 of 5
 * @param {Object} object
 * @param {String} path - path in an object to property
 * @param {String} func - function to invoke
 * @param {Array} [args] - list of args
 * @returns {boolean}
 */

export const invoke = (object, path, func, args) => {
  throw new Error(`put your solution here ${object} ${path} ${func} ${args}`);
};

// 07-is-empty-deep.js

/**
 * Task description: Write a method that makes a deep check is an object empty
 * Empty values: '', null, NaN, undefined, [], {}
 * Expected Result: ({}) => true, ({ a: { b: undefined } }) => true, ({ a: { b: [] } }) => true
 * Task complexity: 3 of 5
 * @param {?} element - Object with values of any data types
 * @returns {boolean}
 */

export const isEmptyDeep = (element) => {
  throw new Error(`put your solution here ${element}`);
};

// 08-is-equal-deep.js

/**
 * Task description: Write a method that makes a deep compare of two objects
 * Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */

export const isEqualDeep = (firstObj, secondObj) => {
  throw new Error(`put your solution here ${firstObj} ${secondObj}`);
};

// 09-intersection.js

/**
 * Task description: Write a method that finds shallow intersections of objects
 * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {Object}
 */

export const intersection = (firstObj, secondObj) => {
  throw new Error(`put your solution here ${firstObj} ${secondObj}`);
};

// 10-intersection-deep.js

/**
 * Task description: Write a method that finds all intersections of objects
 * Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object<string | number>} firstObj - Object with values of any data types
 * @param {Object<string | number>} secondObj - Object with values of any data types
 * @returns {Object}
 */

export const intersectionDeep = (firstObj, secondObj) => {
  throw new Error(`put your solution here ${firstObj} ${secondObj}`);
};