// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('good phone number 1', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
})
test('good phone number 2', () => {
  expect(isPhoneNumber('999-7890')).toBe(true);
})
test('bad phone number 1', () => {
  expect(isPhoneNumber('1343-14-1223')).toBe(false);
})
test('bad phone number 2', () => {
  expect(isPhoneNumber('109 999 890')).toBe(false);
})

test('good email 1', () => {
  expect(isEmail('jones@example.com')).toBe(true);
})
test('good email 2', () => {
  expect(isEmail('12341234@bob.ru')).toBe(true);
})
test('bad email 1', () => {
  expect(isEmail('jones@example.comm')).toBe(false);
})
test('bad email 2', () => {
  expect(isEmail('12341234@bobnet')).toBe(false);
})

test('good password 1', () => {
  expect(isStrongPassword('j12345_')).toBe(true);
})
test('good password 2', () => {
  expect(isStrongPassword('joejoe_joe')).toBe(true);
})
test('bad password 1', () => {
  expect(isStrongPassword('112345')).toBe(false);
})
test('bad password 2', () => {
  expect(isStrongPassword('joejoejoejoejoejoe')).toBe(false);
})

test('good date 1', () => {
  expect(isDate('04/44/2020')).toBe(true);
})
test('good date 2', () => {
  expect(isDate('0/0/0000')).toBe(true);
})
test('bad date 1', () => {
  expect(isDate('/44/2020')).toBe(false);
})
test('bad date 2', () => {
  expect(isDate('0/0/00030')).toBe(false);
})

test('good color 1', () => {
  expect(isHexColor('#abc')).toBe(true);
})
test('good color 2', () => {
  expect(isHexColor('#a1b2c3')).toBe(true);
})
test('bad color 1', () => {
  expect(isHexColor('#gbc')).toBe(false);
})
test('bad color 2', () => {
  expect(isHexColor('#a1b2c33')).toBe(false);
})
