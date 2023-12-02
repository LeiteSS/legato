import { config } from 'dotenv';

const env = process.env.DASH_ENV;

config({ path: `.env.${env}` });

const api = {
  port: Number(process.env.PORT) || 3003,
};

const database = {
  uri: process.env.DATABASE_URI || 'mongodb+srv://legato:HrLg3kLrAkLxQkQx@legatocluster.j6d1r2q.mongodb.net/',
};

const encrypt = {
  secretKey: process.env.SECRET_KEY?.split(',').map(Number) || "174,232,91,140,9,183,59,132,55,129,90,140,250,28,38,147",
  segmentSize: Number(process.env.SEGMENT_SIZE) || 1,
};

const jwt = {
  encryption: process.env.JWT_ENCRYPTION || 'HS256',
  expireIn: Number(process.env.JWT_EXPIRE_IN) || 1554787516031,
};

const log = {
  unix: process.env.UNIX_DIR_LOG || './logs/',
};

const mailer = {
  host: process.env.EMAIL_HOST || '',
  port: parseInt(process.env.EMAIL_PORT!, 10),
  user: process.env.EMAIL_USER || '',
  password: process.env.EMAIL_PASSWORD || '',
  defaultSender: process.env.EMAIL_DEFAULT_SENDER || '',
  defaultCC: process.env.EMAIL_DEFAULT_CC || '',
  defaultBCC: process.env.EMAIL_DEFAULT_BCC || '',
  defaultMaintenance: process.env.EMAIL_DEFAULT_MAINTENANCE,
};

const ssl = {
  cert: process.env.SSL_CERT,
  key: process.env.SSL_KEY,
};

const url = {
  login: `${process.env.URL}/login`,
};


export {
  api, database, encrypt, env, jwt, log, mailer, ssl, url
};
