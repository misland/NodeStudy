/*
 * @Description: 
 * @Author: Loki Zhao
 * @Copyright: Karl Storz
 * @Date: 2020-05-19 10:42:27
 * @LastEditors: Loki Zhao
 * @LastEditTime: 2020-05-19 10:55:13
 */
const readline = require("readline");
const fs = require("fs");

const reader = readline.createInterface({
    input: fs.createReadStream("C:\\work\\video\\YUAN\\IPAV\\custom.txt"),
    output: process.stdout
});

reader.on("line", (content) => {
    console.log("line:", content);
});

reader.on("close", () => {
    console.log("read complete");
})