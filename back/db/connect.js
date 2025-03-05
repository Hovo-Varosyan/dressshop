require('dotenv').config();
const mongoose = require('mongoose'),
    db = mongoose.connection;
mongoose.connect(process.env.DB_LINK)

db.on('connecting', () => {
    console.log('start db connecting...')
})
db.on('connected', () => {
    console.log(' db connected')
})
db.on('disconnected', () => {
    console.log('db disconnected')
})
db.on('close', () => {
    console.log('db connection close')
})
db.on('error', (error) => {
    console.log('db error', error)
})

process.on('SIGINT', async () => {
    await db.close();
    console.log('process end mongoose connection close');
    process.exit(0);
});
module.exports = { db }