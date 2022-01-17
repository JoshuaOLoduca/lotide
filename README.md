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