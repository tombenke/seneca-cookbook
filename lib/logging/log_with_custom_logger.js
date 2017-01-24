const CustomLogger = require('./custom-logger')
const seneca = require('seneca')({
    internal: {
        logger: CustomLogger
    },
    test: true,
    log: {
        basic: "any",
//        level: 'debug+', // 'fatal' | 'error' | 'error+' | 'warn' | 'warn+' | 'info' | 'info+', 'debug', 'debug+'
        "omit-metadata": true,
        "omit": ['actid', 'msg', 'kind', 'meta', 'caller', 'when']
    }
})

seneca.ready( function() {

        seneca.log.fatal('fatal log level')
        seneca.log.error('error log level')
        seneca.log.warn('warn log level')
        seneca.log.info('info log level')
        seneca.log.debug('debug log level')
    })
