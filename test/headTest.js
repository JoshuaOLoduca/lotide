const assertEqual = require('../assertEqual');
const head = require('../head');

// Test code
assertEqual(head([,1,1]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");