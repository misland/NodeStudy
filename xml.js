var fs=require('fs')
var xml2js=require('xml2js')

var parser = new xml2js.Parser()
var filePath = "./settings.xml"

const readSettings=function(){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath, function(err, data) {
            if(err){
                reject(err)
            }
            parser.parseString(data, function (err, result) {
                if(err){
                    console.log('error occured')
                    reject(err)
                }
                else{
                    var settings={}
                    settings.server= result.server.$.value
                    settings.database=result.server.database[1].$.value
                    settings.table=result.server.table[0].$.value
                    settings.pid=result.server.pid[0].$.value
                    settings.name=result.server.name[0].$.value
                    settings.sex=result.server.sex[0].$.value
                    settings.birthday=result.server.birthday[0].$.value
                    settings.male=result.server.male[0].$.value
                    settings.female=result.server.female[0].$.value
                    resolve(settings)
                }
            })
        })
    })
}

readSettings().then(function(settings){
    console.log(settings)
}).catch(function(err){
    console.log('caught error')
    console.log(err)
})