const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');



test('can set office number using the constructor', () => {
    const officeNumber = 100;
    const manager = new Manager('BooBoo', 1, 'manager@email.com', officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});

test('can get office number with office number function', () => {
    const testValue = 100;
    const manager = new Manager('BooBoo', 1, 'manager@email.com', testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
});

// Test if the getRole() value is Manager
test('get role return the word Manager', () => {
    const role = 'Manager';
    const manager = new Manager('BooBoo', 1, 'manager@email.com', 100);
    expect(manager.getRole()).toBe(role);
});
