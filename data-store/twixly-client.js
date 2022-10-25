import config from '../config';
import twixly from 'twixly';

var client = new twixly.createClient({
  http: 'http',
  host: 'localhost',
  port: '8080',
  secure: false,
  bucket: config.BUCKET_ID,
  accessToken: config.ACCESS_TOKEN
});

module.exports = client;