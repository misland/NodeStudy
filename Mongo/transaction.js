const assert = require('assert');
const { MongoClient } = require('mongodb');

run().catch(error => console.error(error.stack));

async function run() {
    const uri = 'mongodb://KS0004929:27017,KS0004929:27018,KS0004929:27019/pm?replicaSet=rs';
    // const uri = 'mongodb://127.0.0.1:27017,127.0.0.1:27018,127.0.0.1:27019/pm?replicaSet=rs';
    const client = await MongoClient.connect(uri, { useNewUrlParser: true });

    const user = client.db('pm').collection('user');
    // await client.db('pm').dropDatabase();
    // You need to explicitly create a collection before starting a transaction
    // Otherwise you'll get an error:
    // "Cannot create namespace test.Answer in multi-document transaction"
    // await client.db('pm').createCollection('user', {});

    const session = client.startSession();
    session.startTransaction();

    // Insert a doc and check that MongoDB stored it
    await user.insertOne({ name: 'zgh' }, { session });
    doc = await user.findOne({}, { session });
    console.log(doc)
    assert.ok(doc);

    // Abort the transaction and undo the write
    //   await session.abortTransaction();
    await session.commitTransaction()
    session.endSession();

    // Document is no longer there!
    doc = await user.findOne({});
    console.log(doc)
    // assert.ok(!doc);
    assert.ok(doc)

    console.log('Done');
}