const oracledb = require('oracledb')

let dbConfig = {
    user: 'sa',
    password: 'Ks123456',
    connectString: '172.16.7.22:1521/HIS'
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
    