// Constructors
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// Denpendencies 
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// setting a path for html to sit
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

// To show the HTML page
const render = require("./src/HtmlTemplate")

// To store information for team members
const teamArray = [];
const IdArray = [];

//App Function
function initApp(){

// To allow manager to build the team
function createManager(){
console.log("Lets start building your team");
inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "What is the managers name?",
        validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },

    },
    {
        type: "input",
        name: "managerId",
        message: "What is the managers Id?",
        validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'Please enter a positive number greater than zero.';
          },
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the managers email?",
        validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a positive number greater than zero.';
          },
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the managers office number?",
        validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'Please enter a positive number greater than zero.';
          },
    },

])
// Takes answers from prompt 
.then((answers) => {
    // Uses answers to build a manager object
    const manager = new Manager(
        answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    //store managers info in array
    teamArray.push(manager);
    IdArray.push(answers.managerId);
    createTeam();
});
}
function createTeam(){
inquirer.prompt([
    {
        type: "list",
        name: "createTeam",
        message: "What team members would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "No More Members"
        ]
    }
])

.then(managersChoice => {
    switch (managersChoice.createTeam) {
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
        default:
            // Builder ;
            buildTeam();
    }
})
}

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineers name?",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
    
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineers Id?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    if(IdArray.includes(answer)){
                        return "This id is already taken, please enter a new number"
                    }
                    else{
                        return true;
                    }
                }
                return 'Please enter a positive number greater than zero.';
              },    
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineers email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
              },
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineers github username?",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
    
        },
    ])
    // Takes answers from prompt 
    .then((answers) => {
        // Uses answers to build a manager object
        const engineer = new Engineer(
            answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        //store engineers info in array
        teamArray.push(engineer);
        IdArray.push(answers.engineerId);
        createTeam();
    });
}

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Interns name?",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },    
        },
        {
            type: "input",
            name: "internId",
            message: "What is the interns Id?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    if(IdArray.includes(answer)){
                        return "This id is already taken, please enter a new number"
                    }
                    else{
                        return true;
                    }
                }
                return 'Please enter a positive number greater than zero.';
              },    
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the interns email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
              },
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the interns school?",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },    
        },
    ])
    // Takes answers from prompt 
    .then((answers) => {
        // Uses answers to build a manager object
        const intern = new Intern(
            answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        //store engineers info in array
        teamArray.push(intern);
        IdArray.push(answers.internId);
        createTeam();
    });
}

function buildTeam(){
    // checks if Dist Directory, if it doesnt exit, it makes it
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
      }
      // Uses the html template to write the HTML file with the team array information
      fs.writeFileSync(distPath, render(teamArray), 'utf-8');
}

createManager();


}

initApp();
