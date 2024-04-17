//Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
import inquirer from "inquirer";
async function check(){
    let getOption=await inquirer.prompt([
        {
            name:"op1",
            type:"confirm",
            message:"enter option1"
        },
        {
            name:"op2",
            type:"confirm",
            message:"enter option2"
        }
    ])
    if(getOption.op1===true && getOption.op2===true || getOption.op1===false && getOption.op2===false ){
        console.log("you entered both same values");
        console.log(`(${getOption.op1} , ${getOption.op2})`);
    }
    else{
        console.log("you entered different boolean values.");
        console.log(`(${getOption.op1} , ${getOption.op2})`);
    }
    
}

check();
