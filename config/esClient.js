const elastic = require('elasticsearch');

const esClient = elastic.Client({
  host: 'localhost:9200'
});

module.exports = esClient;