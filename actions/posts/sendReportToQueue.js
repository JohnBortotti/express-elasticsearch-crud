const redisConfig = require('../../config/redis');
const Queue = require('bull');
const reportQueue = new Queue('report', redisConfig.url);

sendReportToQueue = (req, res) => {
  reportQueue.add({ email: req.body.email });
  res.status(200).send({ response: "Job in queue" });
}

module.exports = sendReportToQueue;