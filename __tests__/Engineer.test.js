const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');




test('can set github account using constructor', () => {
    const testValue = 'GitHubAccount';
    const engineer = new Engineer('Booboo', 1, 'engineer@email.com', testValue);
    expect(engineer.github).toBe(testValue);
})

test('can get github account with getGithub() function', () => {
    const testValue = 'GitHubAccount';
    const engineer = new Engineer('Booboo', 1, 'engineer@email.com', testValue);
    expect(engineer.getGitHub()).toBe(testValue);
});

// Test if the getRole() value is Engineer
test('can we get a role using role function', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Booboo', 1, 'engineer@email.com', 'GitHubAccount');
    expect(engineer.getRole()).toBe(role);
});