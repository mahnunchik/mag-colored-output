

var hub = require('mag-hub');
var format = require('mag-format-message');
var colored = require('../');

hub.pipe(format())
  .pipe(colored())
  .pipe(process.stdout);

var logger = require('mag')('colored-output');

logger.info('examle of %s', 'mag-format-message');
logger.debug('mag methids:\n ', logger);

var secondLogger = require('mag')('second-logger');

secondLogger.info('i am in a different color');

