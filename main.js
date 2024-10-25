"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([{
        type: "list",
        name: "fruit",
        message: "what is your favorite fruit ?",
        choices: ["mango", "apple", "banana", "lychee"],
    }]);
console.log("my favorite fruit is", answer.fruit);
var answer1 = await inquirer_1.default.prompt([{
        type: "input",
        name: "answer",
        message: "How are you ? "
    }]);
console.log(answer1);
var ans = await inquirer_1.default.prompt([{
        type: "list",
        name: "answer",
        message: "login password",
        choices: ["12345", "98765"]
    }]);
console.log();
