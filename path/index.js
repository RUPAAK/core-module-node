const path = require("path");


// const dirPath = path.dirname("../fs/README.md");
// console.info(dirPath);


// const extName= path.extname('./README.md')
// console.log(extName)


// const extName= path.basename('./README.md')
// console.log(extName)

// const extName= path.parse('./README.md')
// console.log(extName)

const pathNormalize= path.normalize('../os/README.md')

console.log(pathNormalize)