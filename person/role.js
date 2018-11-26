module.exports = {
    id,
    name
}

db.role.insertMany([
    {code:1,name:'主刀医生'},
    {code:2,name:'助理医生'},
    {code:3,name:'洗手护士'},
    {code:4,name:'巡回护士'},
    {code:5,name:'护工'},
    {code:6,name:'清洁工'},
    {code:7,name:'病人'},
    {code:8,name:'麻醉医生'}
])

db.role.insertMany([
    {id:8,name:'AnesthesiaDoctor'}
])
