Boilerplates (project archetypes)
=================================
You can use the archetypes referred below with the [kickoff](https://github.com/tombenke/kickoff) utility to generate
your tailor-made project scaffoldings in minutes.

## How to create a seneca application?

A typical seneca application looks like this:

```JavaScript
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
```

The [seneca-app-archetype](https://github.com/tombenke/seneca-app-archetype) GitHub repository contains a whole skeleton project
for standalone seneca applications.

See also: the [kickoff](https://github.com/tombenke/kickoff) utility.

## How to create a standalone module for a seneca plugin?

The [seneca-plugin-archetype](https://github.com/tombenke/seneca-plugin-archetype) GitHub repository contains a whole skeleton project
for standalone seneca plugins.

See also: the [kickoff](https://github.com/tombenke/kickoff) utility.

## References

- [kickoff](https://github.com/tombenke/kickoff)
- [seneca-app-archetype](https://github.com/tombenke/seneca-app-archetype)
- [seneca-plugin-archetype](https://github.com/tombenke/seneca-plugin-archetype)

