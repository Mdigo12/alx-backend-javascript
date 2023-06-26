export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];
  let iterator = reportWithIterator.next();

  while (!iterator.done) {
    employeeNames.push(iterator.value);
    iterator = reportWithIterator.next();
  }

  return employeeNames.join('|');
}
