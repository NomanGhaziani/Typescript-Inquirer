import inquirer from 'inquirer';
let answer= await inquirer.prompt([{
type : "list",
name : "fruit",
message : "what is your favorite fruit ?",
choices :["mango","apple","banana","lychee"],
}])
console.log("my favorite fruit is", answer.fruit);

let answer1 = await inquirer.prompt([{
    type : "input", 
    name : "answer",
    message :
    "How are you ? " 
}])
console.log(answer1)

let ans = await inquirer.prompt([{
    type : "list",
    name : "answer",
    message : "login password",
    choices : ["12345","98765"]
}])
console.log()

