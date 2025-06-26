/*
 * Helper Function
 * Purpose:
 * Check the testedValue if it's included to the enumValues.
 *
 * @params
 * - testedValue: any values to be check.
 * - enumValues: a Set of enum values.
 *
 * @returns testedValue or throws an error.
 */

const isValidEnum = (testedValue, enumValues) => {
  if (!enumValues.has(testedValue)) {
    throw new Error(
      `Invalid Enum Value("${testedValue}"): Only allowed values are [${[...enumValues]}]`,
    );
  } else {
    return testedValue;
  }
};
export { isValidEnum };
