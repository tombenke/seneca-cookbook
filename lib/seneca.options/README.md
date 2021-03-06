seneca.options
==============

This section is about:

- What are the built-in, default options?
- How can I use the `seneca.options.js` to define options?
- How can I define options through the environment?
- How are the default and custom options defined?


## The configuration parameters of the seneca instance

Seneca instances can be configured by the `options` parameter, that is an object.
find the list of properties of the `options` object, and their default values in the [Internal Defaults](#internal-defaults) section below.

The options can be defined via the following ways
(the order of priority, from highest to lowest):

- [Command line](#define-options-in-command-line)
- [Environment variable](#define-options-through-environment-variables)
- [Source code](#load-options-in-source-code)
- [Custom options file](#load-options-from-custom-file)
- [Default options file](#load-options-from-default-file)
- [Internal defaults](#internal-defaults)

### Internal defaults

```JavaScript
    defaults: {
        tag: '-',           // Tag this Seneca instance, will be appended to instance identifier.
        idlen: 12,          // Standard length of identifiers for actions.
        timeout: 22222,     // Standard timeout for actions.
        test: false,        // Test mode. Use for unit testing.

        default_plugins: {
          transport: true   // Register (true) default plugins.
                            // Set false to not register when using custom versions.
        },

        debug: {            // Debug settings.
          fragile: false,   // Throw (some) errors from seneca.act.
          undead: false,    // Fatal errors ... aren't fatal. Not for production!

          print: {          // Print debug info to console
            options: false  // Print options. Best used via --seneca.print.options.
          },

          act_caller: false, // Trace action caller and place in args.caller$.
          short_logs: false, // Shorten all identifiers to 2 characters.
          callpoint: false,  // Record and log callpoints (calling code locations).
          deprecation: true  // Log deprecation warnings
        },
        log: {},             // Defines either shortcuts to filter log, or detailed description of
                             // levels and log handler mapping (see details in section about logging)

        strict: {           // Enforce strict behaviours. Relax when backwards compatibility needed.
          result: true,     // Action result must be a plain object.
          fixedargs: true,  // Delegate fixedargs override action args.
          add: false,       // Adding a pattern overrides existing pattern only if matches exactly.
          find: true,       // If no action is found and find is false,
                            // then no error returned along with empty object
          maxloop: 11       // Maximum number of times an action can call itself
        },

        actcache: {         // Action cache. Makes inbound messages idempotent.
          active: false,
          size: 11111
        },

        trace: {            // Action executor tracing. See gate-executor module.
          act: false,
          stack: false,
          unknown: true,    // Messages that do not match a known pattern
          invalid: false    // Messages that have invalid content
        },

        stats: {            // Action statistics settings. See rolling-stats module.
          size: 1024,
          interval: 60000,
          running: false
        },

        deathdelay: 11111,  // Wait time for plugins to close gracefully.

        plugin: {},         // Plugin settings

        system: {           // System wide functionality.
          catchall: false,  // seneca.add uses catchall (pattern='') prior

          close_signals: {  // Close instance on these signals, if true.
            SIGHUP: true,
            SIGTERM: true,
            SIGINT: true,
            SIGBREAK: true
          }
        },

        internal: {},       // Internal functionality. Reserved for objects and funtions only.

        status: {           // Log status at periodic intervals.
          interval: 60000,
          running: false    // By default, does not run.
        },

        legacy: {}          // backwards compatibility settings
    }
```

### Load options from default file

Seneca options can be loaded from configuration file named `seneca.options.js` that is placed in the current folder.
This file should be a Node.js module that exports a JSON object.

The [`seneca.options.js`](seneca.options.js) file can specify:

- global Seneca options,
- and options for individual plugins.

__In theory:__ 
Top level properties that match the name of a plugin are used to provide options to plugins when they are loaded.
If you are using tags to create multiple instances of the same plugin,
you can use the $suffix convention to specify options particular to a given tagged plugin instance.

TODO:
- Clarify how the plugin config really works!
- What is the purpose of `options.plugins` object? (Register plugins specified in options?)

### Load options from custom file

You can define the custom options in a JavaScript file and you can give an arbitrary name to it.
This custom options file can be loaded via the `--seneca.options.from=<custom-options-file-name>` argument.

For example this is the content of the [`custom.options.js`](custom.options.js) file, which is placed beside the seneca application:

```js
    module.exports = {
        tag: 'tag-from-custom.options.js',
        additional: "additional parameter"
    }
```

You can load it with the following command which will overwrite the default options:

```shell
    node app_with_options.js --seneca.options.from=custom.options.js
```

## Load options in source code

Example:

```JavaScript
    var Seneca = require('seneca')

    var seneca = Seneca({
      tag: 'some-name',
      timeout: 2000,
      log: 'silent'
      // Other parameters
    })
```

## Define options through environment variables

The following environment setting will make seneca to automatically print out the options, and set it into `test` mode:

```shell
    export SENECA_OPTIONS='debug:{print:{options:true}},test:true'
    node app_with_options.js
```

## Define options in command line

```shell
    node app_with_options.js --seneca.options="log:info,debug:{print:{options:true}}"
```

## Print options with `--seneca.print.options`

Prints out useful hints about the actual configuration of the seneca instance.

```shell
    node empty_app.js --seneca.print.options

    Seneca Options (undefined): before plugins
    ===

    { debug: 
       { print: { options: true },
         fragile: false,
         undead: false,
         act_caller: false,
         short_logs: false,
         callpoint: false,
         deprecation: true },
      tag: '-',
      idlen: 12,
      timeout: 22222,
      default_plugins: { transport: true },
      test: false,
      strict: 
       { result: true,
         fixedargs: true,
         add: false,
         find: true,
         maxloop: 11 },
      actcache: { active: false, size: 11111 },
      trace: { act: false, stack: false, unknown: true, invalid: false },
      stats: { size: 1024, interval: 60000, running: false },
      deathdelay: 11111,
      plugin: {},
      system: 
       { catchall: false,
         close_signals: { SIGHUP: true, SIGTERM: true, SIGINT: true, SIGBREAK: true } },
      internal: 
       { actrouter: 
          
       cmd:
           close ->
            role:
             seneca -> <[object Object]>
           get ->
            role:
             options -> <[object Object]>
           stats ->
            role:
             seneca -> <[object Object]>
           |
            get:
             options ->
              role:
               seneca -> <[object Object]>
             |
              info:
               fatal ->
                role:
                 seneca -> <[object Object]>
               |
                role:
                 seneca ->
                  stats:
                   true -> <[object Object]>,
         subrouter:  },
      status: { interval: 60000, running: false },
      legacy: { logging: false },
      log: {} }
```

## Print options from code

You can access to the current options via `seneca.options()` call:

```JavaScript
    const seneca = require('seneca')()

    seneca.ready( function() {
            console.log(this.options())
        })
```

## Print options via configuration

Set the `debug.print.options` property of the seneca options to `true`:

```JavaScript
    // Seneca options object
    {
        debug: {
            print: {
                options: true
            }
        }
    }
```

## configure the plugins through the seneca options

TODO: Write some example with plugins and config!
