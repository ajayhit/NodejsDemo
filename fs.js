const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./first.txt','utf-8')
const second=readFileSync('./second.txt','utf-8')


writeFileSync('./result.txt','hello result')
const result=readFileSync('./result.txt','utf-8')

console.log(result)