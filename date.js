const mongoose = require('mongoose')
const moment = require('moment')

mongoose.connect('mongodb://localhost/hl7log')

let testSchema = mongoose.Schema({
    time: Date
})

let model = mongoose.model('test', testSchema)

let data =
    [
        { time: new Date('2018-10-22 01:01:00') },
        { time: new Date('2018-10-22 02:01:00') },
        { time: new Date('2018-10-22 07:12:00') }
    ]
// model.insertMany(data, function (err, res) {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(res)
// })

// 日期后加上00:00:00，查询时会自动将其转换为iso时间，这样就能和mongo中的时间对应上了
let query = {
    time:
    {
        $gte: new Date('2018-10-22 00:00:00'),
        $lt: new Date('2018-10-23 00:00:00')
    }
}
model.find(query, function (err, res) {
    if (err) {
        console.log(err)
        return
    }
    for (let item of res) {
        //moment能将isodate转换成当地时间
        console.log(moment(item.time).format('YYYY-MM-DD HH:mm:ss'))
    }
})
