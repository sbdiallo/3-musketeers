'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning then default ifself', () => {
  //convert(2, 'BTC', 'BTC');
  //throw new Error('test not yet defined... write your test here');
  expect(typeof convert(2, 'BTC', 'BTC')).toBe('number');
});


test('should return a number', () => {
  //convert(2, 'BTC', 'BTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(typeof convert(2, 'BTC', 'BTC', 'Number')).toBe('number');
});


test('should return a Big number', () => {
  //convert(2, 'BTC', 'BTC', 'Big');
  //throw new Error('test not yet defined... write your test here');
  expect( typeof convert(2, 'BTC', 'BTC', 'Big')).toBeInstanceOf('Big');
});


test('should return a string', () => {
  //convert(2100, 'mBTC', 'BTC', 'String');
  //throw new Error('test not yet defined... write your test here');
  expect( typeof convert(2100, 'mBTC', 'BTC', 'String')).toBe('string');
});


test('should convert a number from interger', () => {
  //convert(123456789012345, 'Satoshi', 'BTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toEqual(1234567.89012345);
});

test('should convert a number from float', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).toEqual(123456789012345);
});

test('should convert a string', () => {
  //convert('2', 'BTC', 'BTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert('2', 'BTC', 'BTC', 'Number')).toEqual(2);
});

test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).toEqual(2);
});

test('should convert a NaN to a number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(typeof convert(NaN, 'BTC', 'BTC', 'Number')).toBe('number');
  expect(typeof convert(NaN, 'BTC', 'mBTC', 'Number')).toBe('number');
});

test('should convert a NaN to a string', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  //convert(NaN, 'BTC', 'mBTC', 'String');
  //throw new Error('test not yet defined... write your test here');
  expect(typeof convert(NaN, 'BTC', 'BTC', 'String')).toBe('String');
  expect(typeof convert(NaN, 'BTC', 'mBTC', 'String')).toBe('String');
});

test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
  //throw new Error('test not yet defined... write your test here');
  expect(() => {convert(NaN, 'BTC', 'BTC', 'Big')}).toThrow(); 
});

test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(typeof convert(4.6, 'Satoshi', 'BTC', 'Number')).toBe('number');
  expect(typeof convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBe('number');
});

test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  //convert(new Big(2), 'BTC', 'x', 'Number');
  //convert(NaN, 'x', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'x', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(() => {convert(new Big(2), 'x', 'BTC', 'Number')}).toThrow();
  expect(() => {convert(new Big(2), 'BTC', 'x', 'Number')}).toThrow();
  expect(() => {convert(NaN, 'x', 'BTC', 'Number')}).toThrow();
  expect(() => {convert(NaN, 'BTC', 'x', 'Number')}).toThrow();
});

test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  //convert(NaN, 'BTC', 'mBTC', 'x');
  //throw new Error('test not yet defined... write your test here');
  expect(() => {convert(2, 'BTC', 'mBTC', 'x')}).toThrow();
  expect(() => {convert(NaN, 'BTC', 'mBTC', 'x')}).toThrow();
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'bit');
  //throw new Error('test not yet defined... write your test here');
   expect(convert(4.6, 'Satoshi', 'sat')).toEqual(4.6);
   expect(convert(4.6, 'μBTC', 'btest')).toEqual(4.6);
});

/* additional tests to cover 80% */
//remove an unit
test('should remove an unit', () => {
  convert.removeUnit('BTC');
  expect(convert.units().includes('BTC')).not.toBeTruthy();
});

//add an unit
test('should add an unit', () => {
  convert.addUnit('BTC', 0.1);
  expect(convert.units().includes('BTC')).toBeTruthy();
});



