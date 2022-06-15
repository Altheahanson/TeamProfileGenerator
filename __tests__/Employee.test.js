const { default: TestRunner } = require('jest-runner');
const Employee = require('../lib/Employee');

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

test("can we set a name using our constructor", () => {
    const name = "Tom"
    const employee = new Employee(name);
    expect(employee.name).toBe(name)
})
test("can we set a id using our constructor", () => {
    const id = 58;
    const employee = new Employee("Tom", id);
    expect(employee.id).toBe(id)
})
test("can we set a email using our constructor", () => {
    const email = "tom@tom.com";
    const employee = new Employee("Tom", 58, email);
    expect(employee.email).toBe(email)
})



test("can we get a name using get name function", () => {
    const name = "Tom"
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name)
})
test("can we get a id using get id function", () => {
    const id = 58;
    const employee = new Employee("Tom", id);
    expect(employee.getId()).toBe(id)
})
test("can we get a email using email function", () => {
    const email = "tom@tom.com";
    const employee = new Employee("Tom", 58, email);
    expect(employee.getEmail()).toBe(email)
})
test("can we get a role using role function", () => {
    const role = "Employee";
    const employee = new Employee("Tom", 58, "tom@tom.com");
    expect(employee.getRole()).toBe(role)
})