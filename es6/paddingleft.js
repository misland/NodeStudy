function prefixIntrger(num, length) {
    console.log(Array(length))
    console.log(Array(length).join('0') + num)
    var res= (Array(length).join('0') + num).slice(-length)
    console.log(res)
}

// prefixIntrger('10',8)



const paddingLeft=function(val,length){
    return (Array(length).join('0') + val).slice(-length)
}

var kls= paddingLeft('10',8)
// console.log(kls)

var nl=null
var nlstr=`kkk${nl.trim()}ll`
console.log(nlstr)