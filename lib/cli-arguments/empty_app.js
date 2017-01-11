// Get environment here or put them into a separate config.js file
// const SOME_CONFIG = process.env.SOME_CONFIG || 'some-default-value' 
const NODE_ENV = process.env.NODE_ENV || 'development'
const TEST = NODE_ENV === 'test'

// Load the seneca container
const seneca = require('seneca')(/* { Put seneca options here } */)

// Load your other modules (web API server, etc.) required for the application
// const myWebServer = require('myWebServer')

seneca
    // 'use' community plugins here and after your plugins with their configs
    // .use('plugin-name-1')
    // .use('plugin-name-2')

    // Activate the transport layer for microservices (using env variables for config)
    // .listen({})
    // .client({})
    .ready( function() {
        // Seneca microservice container is ready for working, incl. the plugins

        // Put your custom code here if there is any
        // myWebServer.start(seneca);

        console.log('Application is running...')
    })
