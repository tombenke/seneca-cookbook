// Load the seneca container
const seneca = require('seneca')({
    tag: 'app-with-options'
})

seneca
    // 'use' community plugins here and after your plugins with their configs
    // .use('plugin-name-1')
    // .use('plugin-name-2')

    // Activate the transport layer for microservices (using env variables for config)
    // .listen({})
    // .client({})
    .ready( function() {
        console.log(this.options())
        seneca.log.info('Application is running...')
    })
