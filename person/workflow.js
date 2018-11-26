// 手术流程
// 探视 View 100
// 术前准备  换衣区域换鞋、换衣、洗手、消毒 Prepare 200
// 术前准备 换衣 Prepare-Clothes 201
// 术前准备 洗手 Prepare-Wash 202
// 病人前往手术室 PatientPrepare 300
// 接诊 Reception 400
// 麻醉 Anesthesia 500
// 术中 医生、护士出入手术室 Operation 600
// 术后 手术室区域换衣、洗手、消毒 Postoperative 700
// 清洁 Clean 800
// 复苏 Resuscitation 900
// 病人返回ICU/病房 Return 1000

module.exports = {
    id,
    name, // 流程名字
    number, // 流程号码 100 200...
    parentWorkflow, // 父流程
    roles, // [] 流程包含的角色，如同样在手术室，医生属于术中流程，清洁人员属于清洁流程
    positions // [] 流程包含的位置，如在换衣间、洗手池都属于术前准备流程
}

db.workflow.insertMany([
    {code:1,name:'View',number:100,roles:[4,5],positions:[7]},
    {code:2,name:'Prepare',number:200,roles:[1,2,3,4,5,6],positions:[1,2,3]},
    {code:3,name:'Prepare-Clothes',number:201,parentWorkflow:2,roles:[1,2,3,4,5,6],positions:[1,2,3]},
    {code:4,name:'Prepare-Wash',number:202,parentWorkflow:2,roles:[1,2,3,4,5,6],positions:[1,2,3]},
    {code:5,name:'PatientPrepare',number:300,roles:[7],positions:[7,8,9]},
    {code:6,name:'Reception',number:400,roles:[5],positions:[8,9,12,13,14,15,16]},
    {code:7,name:'Anesthesia',number:500,roles:[3,4,8],positions:[6,17,18,19,20]},
    {code:8,name:'Operation',number:600,roles:[1,2,3,4],positions:[12,13,14,15,16]},
    {code:9,name:'Postoperative',number:700,roles:[1,2,3,4],positions:[4]},
    {code:10,name:'Clean',number:800,roles:[6],positions:[12,13,14,15,16]},
    {code:11,name:'Resuscitation',number:900,roles:[7,8],positions:[6,17,18,19,20]},
    {code:12,name:'Return',number:1000,roles:[7],positions:[7,10,11]}
])
