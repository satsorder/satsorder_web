import Decimal from 'decimal.js-light';
import { BigNumber, utils } from 'ethers';

/**
 * toHex
 * @param {String|Number|BigInt|BigNumber} mixed mixed is integer, 不能时字符串 '111'
 * @return {String} A hexadecimal character string
 */
export const toHex = (mixed) => {
  return utils.hexlify(mixed);
};

export const etherToWei = (mixed) => {
  return utils.parseEther(mixed);
};
export const weiToEther = (mixed) => {
  const num = new Decimal(mixed).toFixed();
  return utils.formatEther(num);
};
// utils.formatUnits('1000000000',6)
/**
 * formatUnits
 * @param {String} number number is bigNumber
 * @param {String|Number|BigInt|BigNumber} decimal decimal is decimal
 * @return {Number} A hexadecimal character string
 */
export const toFormatUnits = (number, decimal, keep) => {
  return formatDecimal(utils.formatUnits(number, decimal), keep);
};

/**
 * get bigNumber
 * @param {String|Number|HEX|BigNumber|BigInt} mixed mixed is a integer
 * @return {Object} bigNumber object
 */
export const toBigNumber = (mixed) =>
  BigNumber.from(mixed);

/**
 * get bigNumber string
 * @param {String|Number|HEX|BigNumber|BigInt} mixed mixed is a integer
 * @return {String} bigNumber string
 */
export const toBigNumberString = (mixed) => BigNumber.from(mixed).toString();

/**
 * get javascript number
 * @param {BigNumber} number is a integer
 * @return {Number}
 */
export const toNumber = (number) => number.toNumber();

/**
 * check bigNumber
 * @param {Any} mixed mixed is a integer
 * @return {Boolean} check result
 */
export const isBigNumber = (mixed) => BigNumber.isBigNumber(mixed);

/**
 * hexadecimal to decimal
 * @param {Hex} hex hexadecimal
 * @return {Number} decimal
 */
export const hexToNumber = (hex) =>
  parseInt(hex.toString().slice(2), 16);

/**
 * Keep n decimal places - do not round
 * @return {number}
 */
export const formatDecimal = (num, decimal) => {
  num = num.toString();
  if (num.indexOf('-') > -1) {
    return '0';
  }
  if (num.indexOf('.') === -1 || num.split('.')[1].length <= decimal) {
    return num;
  }
  if (decimal === 0) {
    return num.split('.')[0];
  }
  const a = num.split('.')[0];
  const b = num.split('.')[1];
  if (num.indexOf('.0000') === -1) {
    return a + '.' + b.substring(0, decimal).replace(/0+$/, '');
  } else {
    return a + '.0000';
  }
};

export const isAddress = (address) => {
  return utils.isAddress(address);
};
