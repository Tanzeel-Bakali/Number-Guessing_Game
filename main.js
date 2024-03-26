#! /usr/bin/env node
import inquirer from "inquirer";
while (true) {
    let randomNum = Math.floor(Math.random() * 10 + 1);
    let game = await inquirer.prompt([
        {
            message: "Please press Any Digit From 1-10 or press 0 to exit",
            type: "number",
            name: "ranNum",
        },
    ]);
    if (game.ranNum === 0) {
        console.log("You Left The Program");
        break;
    }
    else if (game.ranNum === randomNum) {
        console.log("Congratulations , You Guessed a Correct Number");
    }
    else {
        console.log("You Guessed A Wrong Number Please Try Again");
    }
}
