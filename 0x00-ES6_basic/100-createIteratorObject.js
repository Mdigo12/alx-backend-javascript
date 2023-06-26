export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let employees = [];

  for (const department of departments) {
    employees = [...employees, ...department];
  }

  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employees.length) {
        const value = employees[currentIndex];
        currentIndex += 1;
        return { value, done: false };
      }
      return { done: true };
    },
  };
}
