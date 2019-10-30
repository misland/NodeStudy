const linq =require('linq')
const normal = [
    {
        code: 1,
        name: '术前准备',
        number: 100,
        parent: 0,
        roles: ['01', '02', '03', '04', '05'],
        positions: ['01', '02', '03', '04', '05'],
        patient: [false]
    },
    {
        code: 2,
        name: '麻醉',
        number: 200,
        parent: 0,
        roles: ['06'],
        positions: ['01'],
        patient: [true]
    },
    {
        code: 3,
        name: '术中',
        number: 300,
        parent: 0,
        roles: ['01', '02', '03', '04'],
        positions: ['01']
    },
    {
        code: 7,
        name: '备皮',
        number: 301,
        parent: 300,
        roles: ['01', '02', '03', '04'],
        positions: ['01', '012'],
        patient: [true]
    },
    {
        code: 8,
        name: '手术',
        number: 302,
        parent: 300,
        roles: ['01', '02', '03', '04'],
        positions: ['013'],
        patient: [true]
    },
    {
        code: 9,
        name: '缝皮',
        number: 303,
        parent: 300,
        roles: ['01', '02', '03', '04'],
        positions: ['01', '011'],
        patient: [true]
    }]


let deletePointRecursion=function(point) {
    let children=linq.from(normal).where(x=>x.parent===point.number).toArray()
    for (let tem of children) {
        deletePointRecursion(tem)
    }
    normal.splice(normal.findIndex(item => item.number === point.number), 1)
}

let index = normal.findIndex(item => item.code === 3)
deletePointRecursion(normal[index])
console.log(normal)