const mongoose = require('mongoose')
const moment = require('moment')

mongoose.connect('mongodb://localhost/hl7log')

let testSchema = mongoose.Schema({
    time: Date
})
let model = mongoose.model('test', testSchema)
const ListSchema = ({
    logDate: Date,
    uploadTime: Date,
    logCount: Number
})
const listModel = mongoose.model('loglist', ListSchema, 'loglist')

const LogSchema = mongoose.Schema({
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
let log = mongoose.model('log', LogSchema, 'log')

let data =
    [
        { time: new Date('2018-10-22 01:01:00') },
        { time: new Date('2018-10-22 02:01:00') },
        { time: new Date('2018-10-22 07:12:00') }
    ]
let insert = function () {
    model.insertMany(data, function (err, res) {
        if (err) {
            console.log(err)
            return
        }
        console.log(res)
    })
}

// 日期后加上00:00:00，查询时会自动将其转换为iso时间，这样就能和mongo中的时间对应上了
let query = {
    time:
    {
        $gte: new Date('2018-10-22 00:00:00'),
        $lt: new Date('2018-10-23 00:00:00')
    }
}
let search = function () {
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
}


let testMoment = function () {
    var date = new Date('2018-10')
    console.log(moment(date).startOf('month').format('YYYY-MM-DD') + ' 00:00:00')
    console.log(moment(date).endOf('month').format('YYYY-MM-DD') + ' 23:59:59')
}
// testMoment()

let span = function (type, year, month, day) {
    return new Promise(function (resolve, reject) {
        let start = '1900-01-01'
        let end = '1900-01-01'
        let startDate = new Date()
        let endDate = new Date()
        switch (type) {
            case 'year':
                start = year + '-01'
                end = year + '-12'
                startDate = new Date(moment(start).startOf('month').format('YYYY-MM-DD') + ' 00:00:00')
                endDate = new Date(moment(end).endOf('month').format('YYYY-MM-DD') + ' 23:59:59')
                break
            case 'month':
                start = end = year + '-' + month
                startDate = new Date(moment(start).startOf('month').format('YYYY-MM-DD') + ' 00:00:00')
                endDate = new Date(moment(end).endOf('month').format('YYYY-MM-DD') + ' 23:59:59')
                break
            case 'day':
                start = end = year + '-' + month + '-' + day
                startDate = new Date(start + ' 00:00:00')
                endDate = new Date(end + ' 23:59:59')
                break
            default:
                break
        }
        console.log(startDate)
        console.log(endDate)
        let aggregate = log.aggregate([
            {
                $match: { searchTime: { $gte: startDate, $lt: endDate } }
            },
            {
                $group: {
                    _id: { 'success': '$success', 'pid': '$pid' },
                    count: { $sum: 1 }
                }
            }
        ]).exec(function (err, res) {
            if (err) {
                console.log(err)
                reject(err)
                return
            }
            console.log(res)
            resolve(aggregate)
        })
    })
    // console.log(res)
}
// span('year', 2018, 10, 23).then(function (res) {
//     console.log(res)
// })



let init = function () {
    return new Promise(function (resolve, reject) {
        listModel.aggregate()
            .group({
                _id:
                {
                    '$year': '$logDate'
                },
                count:
                {
                    $sum: '$logCount'
                }
            }).exec(function (err, res) {
                if (err) {
                    reject(err)
                }
                console.log(res)
                resolve(res)
            })
    })
}
init()