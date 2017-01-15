const seneca = require('seneca')({
//    log: 'silent'
//    log: 'all'
    log: 'test'
})

seneca
    .ready( function() {

        seneca.log.fatal('fatal log level')
        seneca.log.error('error log level')
        seneca.log.warn('warn log level')
        seneca.log.info('info log level')
        seneca.log.debug('debug log level')
    })
