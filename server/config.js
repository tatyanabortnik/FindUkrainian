module.exports = {
    PORT: process.env.PORT || 3000,
    connectionString: process.env.connectionString || 'mongodb://127.0.0.1:27017',
    dbName: process.env.dbName || 'find_ukrainian',

}
