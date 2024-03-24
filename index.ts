#! /usr/bin/env node
// calculator by switch
// first we import inquirer from inquirer and chalk

import inquirer from "inquirer";
import chalk from "chalk";

const answers : {
    firstnumber : number
    secondnumber : number
    operator : string
    } =await inquirer.prompt([{
        type: "number",
        name: "firstnumber",
        message: "Enter first number"
    },
    {
        type: "number",
        name: "secondnumber",
        message: "Enter second number"
    },
    {
        type: "list",
        name: "operator",
        message: "Enter operator",
        choices: ["Addition ( + )", "Subtraction ( - )", "Multiplication ( X )", "Division ( / )"]
    }])
    // make a variable

    const { firstnumber, secondnumber, operator} = answers;
    // now we use switch and use operator

    let result
    switch (operator) {
        case "Addition ( + )":
            result = firstnumber + secondnumber;
            break;
        case "Subtraction ( - )":
            result = firstnumber - secondnumber;
            break;
        case "Multiplication ( X )":
            result = firstnumber * secondnumber;
            break;
        case "Division ( / )":
            result = firstnumber / secondnumber;
            break;
        default:
            console.log(chalk.red.italic.bold("You selected invalid operator."))
    }
    console.log(chalk.green.italic.bold(`You select, ${firstnumber} ${operator} ${secondnumber}, and your answer is = ${result}`));