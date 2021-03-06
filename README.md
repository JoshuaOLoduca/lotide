# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jolduca/lotide`

**Require it:**

`const _ = require('@jolduca/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: gets the first element of an array
* `tail(...)`: gets everything BUT the first element of an array
* `middle(...)`: gets the middle of odd and even arrays
* `countLetters(...)`: counts the amount of chars in a string
* `letterPositions(...)`: Gets the positions of every letter of a string and returns an object
* `countOnly(...)`: Goes through an array of strings and counts only desired strings
* `flatten(...)`: takes an array of elements and arrays and returns 1 total array containing all elements
* `without(...)`: takes an array source and array of elements to remove from source. returns a copy of source array without elements from 2nd array
* `takeUntil(...)`: takes an array and callback. Goes through array and sends each item to the callback. if callback returns false, adds element to an array. Otherwise, if returns true, will stop and return array of items that returned false upto that point
* `map(...)`: Returns an array after manipulating each element using the provided callback
* `findKeyByValue(...)`: takes an object and finds the first key that has the same value as provided
* `findKey(...)`: takes an object and finds the first key that is the same as provided
* `eqObjects(...)`: takes two objects and returns if they are the same or not.
* `eqArrays(...)`: takes two arrays and returns if they are the same or not.