const path = require("path")
const file = require("fs")
const request = require("request-promise")

const dataPath = path.join(__dirname, "./data.json")
const redditPath = path.join(__dirname, "./popular-article.json")

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    console.log(data)
})

