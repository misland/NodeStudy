const root=function(){
    return new Promise(function(resolve,reject){
        console.log('root')
        throw new Error('test error')
        resolve(200)
    })
}

const first=function(data){
    return new Promise(function(resolve,reject){
        console.log(data)
        var tem='abc'
        root().then(function(val){
            resolve({data,tem})
        }).catch(function(err){
            reject(err)
        })
    })
}

const second=function(second){
    console.log('second '+second.data)
    console.log('second '+second.tem)
    return new Promise(function(resolve,reject){
        var tem='def'
        console.log(tem)
        resolve(tem)
    })
}

const third=function(param){
    return new Promise(function(resolve,reject){
        console.log('third '+param)
        resolve()
    })
}

first('hello world').then(second).then(third).catch(function(err){
    console.log('catch an error')
    console.log(err)
})