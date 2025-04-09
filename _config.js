var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb://karriekamau:fWqB1wLEhz2QPOsf@ac-dq4fdns-shard-00-00.hrahjml.mongodb.net:27017,ac-dq4fdns-shard-00-01.hrahjml.mongodb.net:27017,ac-dq4fdns-shard-00-02.hrahjml.mongodb.net:27017/?replicaSet=atlas-qsal1f-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=DevOPsCluster01',
    development: 'mongodb://karriekamau:fWqB1wLEhz2QPOsf@ac-dq4fdns-shard-00-00.hrahjml.mongodb.net:27017,ac-dq4fdns-shard-00-01.hrahjml.mongodb.net:27017,ac-dq4fdns-shard-00-02.hrahjml.mongodb.net:27017/?replicaSet=atlas-qsal1f-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=DevOPsCluster01',
    test: 'mongodb://karriekamau:fWqB1wLEhz2QPOsf@ac-dq4fdns-shard-00-00.hrahjml.mongodb.net:27017,ac-dq4fdns-shard-00-01.hrahjml.mongodb.net:27017,ac-dq4fdns-shard-00-02.hrahjml.mongodb.net:27017/?replicaSet=atlas-qsal1f-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=DevOPsCluster01'
}
module.exports = config;
