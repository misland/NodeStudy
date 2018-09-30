var settings={}
settings.lastName=''
console.log(settings.lastName !== '')
var res= `select as firstName,`  +
                (settings.lastName !== '' ? `as LastName` : '') +
                `from  where `
console.log(res)