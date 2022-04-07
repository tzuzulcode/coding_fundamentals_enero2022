// import functions from "./example_module.js"
// const data = functions.getUserData()

// import {getUserData} from "./example_module.js"
// const data = getUserData()

import getUserData,{printData} from "./example_module.js"
const data = getUserData()
console.log(data)

printData(data.data.name)