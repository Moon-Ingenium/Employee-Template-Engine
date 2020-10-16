const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employeeArray = [];

const questionsManger = [{
    type: "input",
    message: "What is your name?",
    name: "managerName"
},
{
    type: "input",
    message: "what is your email?",
    name: "managerEmail"
},

{
    type: "input",
    message: "what is your id?",
    name: "managerId"
},

]
const questionsIntern = [{
    type: "input",
    message: "What is your name?",
    name: "internName"
},
{
    type: "input",
    message: "what is your email?",
    name: "internEmail"
},

{
    type: "input",
    message: "what is your id?",
    name: "internId"
},
{
    type: "input",
    message: "what school do you attend?",
    name: "school"
}
]
const questionsEngineer = [{
    type: "input",
    message: "What is your name?",
    name: "engineerName"
},
{
    type: "input",
    message: "what is your email?",
    name: "engineerEmail"
},

{
    type: "input",
    message: "what is your id?",
    name: "engineerId"
},
{
    type: "input",
    message: "what is your github url?",
    name: "github"

}];
const employeeType = [
    {
        type: "checkbox",
        message: "Would you like to make an Intern, Engineer, or quit?",
        choice: "Intern, Engineer, Quit"

    }
];

// Input manger info
inquirer.prompt(questionsManger)
await(function (response) {
    return employeeArray.push(response);
});
// loop employees - do you wany engineer or intern or quit break out of the loop
function chooseemployeeType() {
    if (inquirer.prompt(employeeType === "Intern")) {
    inquirer.prompt(questionsIntern)
        await function (response) {
            return employeeArray.push(response)
        }
    } else if (inquirer.prompt(employeeType === "Engineer")) {
            await function(response){
                return employeeArray.push(response)

            }
    }
    else{
        // run htmlrender
    }
}





// .then to push array
// render(employeeArray)




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
