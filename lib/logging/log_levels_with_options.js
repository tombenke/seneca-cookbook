const seneca = require('seneca')({
    test: true,
    log: {
        // 'fatal' | 'error' | 'error+' | 'warn' | 'warn+' | 'info' | 'info+', 'debug', 'debug+'
        level: 'warn+'
    }
})

seneca
    .ready( function() {

        seneca.log.fatal('fatal log level')
        seneca.log.error('error log level')
        seneca.log.warn('warn log level')
        seneca.log.info('info log level')
        seneca.log.debug('debug log level')
    })
