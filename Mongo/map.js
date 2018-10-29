var logMap = function () {
    emit(this.success, 1)
}

var logReduce = function (key, value) {
    var count = 0
    for (var item of value) {
        count += item
    }
    return count
}
var search = db.log2018.mapReduce(logMap, logReduce,
    {
        out: { merge: "logstatistics" },
        verbose: true
    })