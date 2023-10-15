import { join as pathJoin } from 'path';
import { createLogger, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { log } from './environment';

const {
  combine, simple, timestamp, printf,
} = format;

const loggerError = createLogger({
  level: 'error',
  format: combine(
    timestamp(),
    simple(),
    printf(
      (error) => `${error.level}: ${[error.timestamp]}: ${error.message}\n
        ${error.stack}\n`,
    ),
  ),
  transports: new DailyRotateFile({
    datePattern: 'YYYY-MM-DD',
    filename: pathJoin(log.unix!, 'error', 'error-%DATE%.log'),
    maxFiles: '365d',
  }),
});

const loggerInfo = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    simple(),
    printf(
      (info) => `(${info.level}: ${new Date().toLocaleString('pt-BR')}): ${info.message}\n`,
    ),
  ),
  transports: new DailyRotateFile({
    datePattern: 'YYYY-MM-DD',
    filename: pathJoin(log.unix!, 'info', 'info-%DATE%.log'),
    maxFiles: '365d',
  }),
});

export { loggerError, loggerInfo };
