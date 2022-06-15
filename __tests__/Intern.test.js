const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');



test('can set school using the constructor', () => {
    const testValue = 'Harvard';
    const intern = new Intern('Booboo', 1, 'intern@email.com', testValue);
    expect(intern.school).toBe(testValue);
});

test('can get school using getSchool() function', () => {
    const testValue = 'Harvard';
    const intern = new Intern('Booboo', 1, 'intern@email.com', testValue);
    expect(intern.getSchool()).toBe(testValue);
});

// Test if the getRole() value is Intern
test('can get role returns intern', () => {
    const role = 'Intern';
    const intern = new Intern('Booboo', 1, 'intern@email.com', 'Harvard');
    expect(intern.getRole()).toBe(role);
});