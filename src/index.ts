import * as readline from "readline-sync";
import * as fs from "fs";
import * as path from "path";

function writeFile(): void {
  const relativeFilePath: string = readline.question(
    "What is the file location you want to save in?  "
  );
  const text: string = readline.question("Enter note to save :    ");
  try{
    fs.writeFileSync(path.join(__dirname, relativeFilePath), text, {
        encoding: "utf-8",
      });
      console.info(`${(new Date()).toLocaleTimeString()} : File ${relativeFilePath} created successfully`);
  }
  catch(e){
    console.error("Unable to create file");
    console.error(`${(new Date()).toLocaleTimeString()} : ${e}`)
  }
}

function readFile(): void {
    const relativeFilePath: string = readline.question(
        "Enter file name to read :  "
      );
      try{
        const output = fs.readFileSync(path.join(__dirname, relativeFilePath), {encoding: "utf-8"});
        console.log(output)
      }
      catch(e){
          console.error("Unable to read file");
          console.error(`${(new Date()).toLocaleTimeString()} : ${e}`)
      }
     
}

const option: number = readline.questionInt(
  "Choose Option :\n1:  Write File\n2:  Read File\n\nEnter Option:    "
);
switch (option) {
  case 1:
    writeFile();
    break;
  case 2:
    readFile();
    break;
  default:
    console.log("Unknown Option Chosen");
}
