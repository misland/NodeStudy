const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hl7log')

const Schema = mongoose.Schema
const LogSchema = new Schema({
    searchTime: Date,
    success: Boolean,
    hasData: Boolean,
    pid: String,
    firstName: String,
    lastName: String,
    sex: String,
    birthday: Date,
    visitNo: String
})

const ListSchema = ({
    logDate: String,
    uploadTime: Date
})


const Log = mongoose.model('Log', LogSchema,'log2018')
let data = [
    {success: false, firstName: 'Precinla',  Sex: 'F'},
    {success: true, firstName: 'Zuck', Sex: 'M'}
]
Log.createCollection().then(function(){
    console.log('123')
})

// let listModel = mongoose.model('loglist', ListSchema)
// listModel.find({}, function (err, res) {
//     if (err) {
//         console.log(err)
//         return
//     }
//     if (res.length === 0) {
//         listModel.createCollection().then(function () {
//             console.log('loglist集合已创建')
//         })
//     }
// })


const db = {}



// create Collection
// 根据第一个参数名创建collection，会自动在表名后加上s表示复数
db.createCollection = function (name) {
    const col = mongoose.model(name, LogSchema)
    return col.createCollection()
}

// search
// Log.find({success:true},function (err, res) {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(res)
// })

// create
// let data = [
//     {success: false, Name: 'Precinla', Age: 43, Sex: 'F'},
//     {success: true, Name: 'Zuck', Age: 45, Sex: 'M'},
//     {success: false, Name: 'Bill', Age: 56, Sex: 'M'}
// ]
db.add = function (data, col) {
    let model = mongoose.model(col, LogSchema)
    model.create(data, function (err, res) {
        if (err) {
            console.log(err)
            return
        }
        // res是插入的数据，即data
        console.log(res)
    })

}

// update
// Log.updateOne({Name:'Zuck'},{$set:{Age:'47'}},function (err, res) {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(res)
// })

// mapReduce
let logMap = function () {
    emit(this.success, 1)
}

let logReduce = function (key, value) {
    let count = 0
    for (let item of value) {
        count += item
    }
    return count
}

let mapReduce = {}
mapReduce.map = logMap
mapReduce.reduce = logReduce
mapReduce.query = { Age: { '$gt': 40 } }// 过滤条件
mapReduce.out = { replace: 'LogStistics' }// 输出结果
mapReduce.verbose = true// 显示耗时

db.mapReduce = function (col) {
    let model = mongoose.model(col, LogSchema)
    model.mapReduce(mapReduce, function (err, result) {
        if (err) {
            console.log(err)
            return
        }
        // result包含model和stats，还有collection对象
        // console.log(result)
        // 耗时
        console.log(result.stats.processtime)
        result.model.find().exec(function (err, docs) {
            if (err) {
                console.log(err)
                return
            }
            console.log(docs)
        })
    })
}

module.exports = db
