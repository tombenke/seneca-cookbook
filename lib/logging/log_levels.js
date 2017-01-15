const seneca = require('seneca')(/* NO options defined */)

seneca
    .ready( function() {

        seneca.log.fatal('fatal log level')
        seneca.log.error('error log level')
        seneca.log.warn('warn log level')

        seneca.log.info('info log level')
        seneca.log.info({
            comment: "This log entry holds some details",
            myDetails: 'Some specific details',
        })
        seneca.log.info('info level', {
            comment: "This log entry returns with an array, that also holds some details",
            myDetails: 'Some other details',
        })

        seneca.log.debug('debug log level')
    })
