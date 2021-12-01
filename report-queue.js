const redisConfig = require('./config/redis');
const Queue = require('bull');
const myJobQueue = new Queue('report', redisConfig.url);
const nodemailer = require("nodemailer");
const mailConfig = require('./config/mail');

myJobQueue.process(async (job, done) => {

  let transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.secure,
    auth: {
      user: mailConfig.auth.user,
      pass: mailConfig.auth.pass,
    },
  });

  let message = {
    from: 'Node Elastic Report',
    to: `${job.data.email}`,
    subject: "posts report",
    html: 'http://localhost:5601/app/dashboards#/view/989ad8a0-516e-11ec-912d-815e4614135c?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))',
  };

  await transporter.sendMail(message);

  done();
})