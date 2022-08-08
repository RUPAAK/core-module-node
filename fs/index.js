//Node Js intruduces a datatype called Buffer. It stores data in binary form.

const fs = require("fs");


//Create a file using async method


// fs.writeFile("input.txt", "This is async modules", function (error) {
//   if (error) {
//     return console.error(error);
//   }
//   console.log("Async File Created Successfully");
// });

// console.log("Running...");

//Create a file using sync method

// fs.writeFileSync("sync.txt", "This is sync datas");

// console.log("Running Here")

//update file async
// fs.appendFile("input.txt", ". I am appended", (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Data Appended Async");
// });

//update file sync
// fs.appendFileSync("sync.txt", ". I am appended");

//read file async

// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) return console.error(err);
//   console.log(data);
// });

//read file sync

// try {
  // const data = fs.readFileSync("sync.txt", "utf-8");

  // console.log(data)
//   console.log(data);
//   console.log(data.toSrting());

// } catch (error) {
//   console.error(error);
// }

// research rename and delete
//delete file async
