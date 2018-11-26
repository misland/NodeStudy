module.exports = {
    id,
    name
}

db.position.insertMany([
    {code:1,name:'术前换鞋间'},
    {code:2,name:'术前女性换衣间'},
    {code:3,name:'术前洗手池'},
    {code:4,name:'手术洗手池'},
    {code:5,name:'手术区域1'},
    {code:6,name:'1号麻醉室'},
    {code:7,name:'病房'},
    {code:8,name:'1号手术区域入口'},
    {code:9,name:'2号手术区域入口'},
    {code:10,name:'1号手术区域出口'},
    {code:11,name:'2号手术区域出口'},
    {code:12,name:'1号手术室'},
    {code:13,name:'2号手术室'},
    {code:14,name:'3号手术室'},
    {code:15,name:'4号手术室'},
    {code:16,name:'5号手术室'},
    {code:17,name:'2号麻醉室'},
    {code:18,name:'3号麻醉室'},
    {code:19,name:'4号麻醉室'},
    {code:20,name:'5号麻醉室'},
    {code:21,name:'手术区域男性换衣间'},
    {code:22,name:'手术区域女性换衣间'},
    {code:23,name:'术前男性换衣间'}
])

db.position.insertMany([
    {id:7,name:'region'}
])
db.position.insertMany([
    {id:8,name:'entrance1'},
    {id:9,name:'entrance2'},
    {id:10,name:'export1'},
    {id:11,name:'export2'},
])
db.position.insertMany([
    {id:12,name:'operatingroom1'},
    {id:13,name:'operatingroom2'},
    {id:14,name:'operatingroom3'},
    {id:15,name:'operatingroom4'},
    {id:16,name:'operatingroom5'}
])


db.position.insertMany([
    {id:17,name:'anesthesiaroom2'},
    {id:18,name:'anesthesiaroom3'},
    {id:19,name:'anesthesiaroom4'},
    {id:20,name:'anesthesiaroom5'}
])
db.position.insertMany([
    {id:22,name:'operatingclothesfemale'}
])
