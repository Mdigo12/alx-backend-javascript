/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let result = true;
  list.map((x) => {
    if (!set.has(x)) {
      result = false;
    }
  });

  return result;
}
