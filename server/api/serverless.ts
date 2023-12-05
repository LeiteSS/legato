import { connect } from 'mongoose';
import 'reflect-metadata';
import { api, database } from '../src/config/environment';
import { loggerError, loggerInfo } from '../src/config/logger';
import serverBuild from '../src/server';

(async function init() {
  try {
    const mongoose = await connect(database.uri!);
    mongoose.syncIndexes();

    const server = await serverBuild();

    const hostAndPort = await server.listen({ port: api.port, host: '0.0.0.0' });
    loggerInfo.info(`⚡ Server was running in ${hostAndPort}`);
    await server.ready();
    server.swagger();
  } catch (error) {
    loggerError.error(error);
  }
}());