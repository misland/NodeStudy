const oracledb = require('oracledb')

let dbConfig = {
    user: 'sa',
    password: 'Ks5000',
    connectString: '172.16.70.150:1521/HL7'
}

oracledb.getConnection(dbConfig)
    .then(function (connection) {
        connection.execute('select * from patientinformation where id=:id ', [1])
            .then(function (result) {
                console.log(result)
            })
            .catch(function (err) {
                console.log('execute error', err)
            })
    })
    .catch(function (err) {
        console.log('connect error :', err)
    })
    