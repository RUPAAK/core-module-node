// const fs = require("fs");

// fs.writeFile("async.txt", "This is async", (err) => {
//   if (err) return console.error(err);
//   console.log('File Created Async')
// });

// console.log("This is still running");

// const data = fs.readFileSync("async.txt", "utf-8");
// console.log(data);
// console.log("This is still running");

// Javascript Promise


const firstTask = () => {
  setTimeout(() => {
    console.log("I am first task");
  }, 5000);
};

const secondTask = () => {
  console.log("I am second task");
};

firstTask();

secondTask();
