Logging
=======

## The seneca log API

### Log levels

Seneca provide the following levels in logging: `debug`, `info`, `warn`, `error`, `fatal`.
`debug` is at the bottom of the stack, in the meaning of importance, and `fatal` is on the top.

You can define at which level you want to write a give log message.
Also you can filter the log output referring to these levels.

In order to be able to see more than one level, logging supports the `level+` syntax.
for example: `info+` means `info` and above: `info`, `warn`, `error`, `fatal`.

The default logging level is `info+`.

Some shortcuts are also defined for the most frequently used combinations:

- `silent`=> `none`
- `all`=> `debug+`
- `test` => `error+`

The diagram below visualizes the levels and their shortcuts:

                      level                                 shortcut
       
     --seneca.options.log.level=<level>         --seneca.options.log=<shortcut>
       seneca.options: {log: {level:<level>}}     seneca.options: {log: <shortcut>}
      
    +----------------------------------------+ +-----------------------------------+
    |                 none                   | |            silent                 |
    +========================================+ +===============+===================+
    |                 fatal                  | |               |                   |
    +----------------------------------------+ |               |                   |
    |                 error                  | |               |                   |
    +----------------------------------------+ |     test,     |                   |
    |                 warn                   | |     warn+     |                   |
    +----------------------------------------+ +---------------+                   |
    |                 info                   |                 |                   |
    +----------------------------------------+                 |       all,        |
    |                 debug                  |                 |       debug+      |
    +----------------------------------------+                 +-------------------+

### Writing log messages
    
You can write log messages using the `seneca.log.<level>([entry, ..])` function provided by the seneca instance.

The object `seneca.log` has convenience functions for the built-in log levels, so `<level>` can be any valid log level:

- `seneca.log.fatal()`
- `seneca.log.error()`
- `seneca.log.warn()`
- `seneca.log.info()`
- `seneca.log.debug()`

The `entry` parameter defines the data to be logged, and it can be a `string` or `object` or `array`.
These log functions concatenate all their arguments into an array, which is the content of the log message.

The [`log_levels.js`](./log_levels.js) example writes out messages at several levels, including some details:

```JavaScript
    const seneca = require('seneca')(/* { Put seneca options here } */)

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

            seneca.log.debug('debug log level')            seneca.log.debug('debug log level')
        })
```

## Filtering log

### Filter log with command line arguments and seneca options

The previous [`log_levels.js`](./log_levels.js) example writes out messages at several levels,
and it has no internal options defined for the seneca instance.
By default it displays the default level, that is 'info+':

```sh
    node log_levels.js

    ["fatal log level"]
    ["error log level"]
    ["warn log level"]
    ["info log level"]
    {"comment":"This log entry holds some details","myDetails":"Some specific details","level":"info","when":1484504138783}
    ["info level",{"comment":"This log entry returns with an array, that also holds some details","myDetails":"Some other details"}]
```

Using level shortcuts, via CLI argument:

```sh
    node log_levels.js --seneca.options.log=silent
    
    # prints nothing
```

```sh
    node log_levels.js --seneca.options.log=test

    ["fatal log level"]
    ["error log level"]
    ["warn log level"]
```

```sh
    tombenke@u204400m1:~/topics/seneca-cookbook/lib/logging$ node log_levels.js --seneca.options.log=all
    
    {"kind":"add","case":"ADD","id":"(bdo0lzq0efb8)","pattern":"cmd:stats,role:seneca","name":"action_seneca_stats","level":"debug","when":1484504357961}
    {"kind":"add","case":"ADD","id":"(izw03qk83l5k)","pattern":"cmd:close,role:seneca","name":"action_seneca_close","level":"debug","when":1484504357984}
    {"kind":"add","case":"ADD","id":"(2sn7qeq9ukxx)","pattern":"info:fatal,role:seneca","name":"action_seneca_fatal","level":"debug","when":1484504357985}
    {"kind":"add","case":"ADD","id":"(wpgpq201j5jj)","pattern":"get:options,role:seneca","name":"action_options_get","level":"debug","when":1484504357986}
    {"kind":"add","case":"ADD","id":"(o8jh6b3718up)","pattern":"role:seneca,stats:true","name":"action_seneca_stats","level":"debug","when":1484504357988}
    {"kind":"add","case":"ADD","id":"(b3ja8gxjq8cz)","pattern":"cmd:get,role:options","name":"action_options_get","level":"debug","when":1484504357989}
    {"kind":"notice","notice":"hello seneca 5tytg6f9881q/1484504357925/4851/3.2.2/-","level":"info","when":1484504357989}
    {"kind":"notice","options":{"log":"all","tag":"-","idlen":12,"timeout":22222,"default_plugins":{"transport":true},"test":false,"debug":{"fragile":false,"undead":false,"print":{"options":false},"act_caller":false,"short_logs":false,"callpoint":false,"deprecation":true},"strict":{"result":true,"fixedargs":true,"add":false,"find":true,"maxloop":11},"actcache":{"active":false,"size":11111},"trace":{"act":false,"stack":false,"unknown":true,"invalid":false},"stats":{"size":1024,"interval":60000,"running":false},"deathdelay":11111,"plugin":{},"system":{"catchall":false,"close_signals":{"SIGHUP":true,"SIGTERM":true,"SIGINT":true,"SIGBREAK":true}},"status":{"interval":60000,"running":false},"legacy":{"logging":false}},"level":"debug","when":1484504357990}
    {"kind":"add","case":"ADD","id":"(6koedgyg0o5v)","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","name":"plugin_definition","level":"debug","plugin_name":"transport","when":1484504358136}

    {"actid":"vncx7np9g8oa/wpk7ql9fk4vq","msg":{"role":"seneca","plugin":"define","name":"transport","seq":1,"default$":{},"fatal$":true,"local$":true,"plugin$":{"name":"transport"},"meta$":{"id":"vncx7np9g8oa/wpk7ql9fk4vq","tx":"wpk7ql9fk4vq","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","action":"(6koedgyg0o5v)","plugin_name":"transport","plugin_tag":"-","prior":{"chain":[],"entry":true,"depth":0},"start":1484504358138,"sync":false},"tx$":"wpk7ql9fk4vq"},"entry":true,"prior":[],"meta":{"plugin_name":"transport","plugin_tag":"-","plugin_fullname":"transport","raw":{"role":"seneca","plugin":"define","name":"transport","seq":1},"sub":false,"client":false,"args":{"role":"seneca","plugin":"define","name":"transport","seq":1},"rules":{},"id":"(6koedgyg0o5v)","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","msgcanon":{"name":"transport","plugin":"define","role":"seneca","seq":1,"tag":"undefined"},"priorpath":""},"client":false,"listen":false,"transport":{},"kind":"act","case":"IN","level":"debug","plugin_name":"transport","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","when":1484504358146}
    {"kind":"plugin","case":"init","name":"transport","options":{},"level":"debug","actid":"vncx7np9g8oa/wpk7ql9fk4vq","plugin_name":"transport","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","when":1484504358152}
    {"kind":"add","case":"ADD","id":"(ewpcspvcqj78)","pattern":"cmd:inflight,role:transport","name":"","level":"debug","plugin_name":"transport","when":1484504358155}
    {"kind":"add","case":"ADD","id":"(xbuu86irgc5x)","pattern":"cmd:listen,role:transport","name":"","level":"debug","plugin_name":"transport","when":1484504358155}
    {"kind":"add","case":"ADD","id":"(r5ybgpwoavjh)","pattern":"cmd:client,role:transport","name":"","level":"debug","plugin_name":"transport","when":1484504358156}
    {"kind":"add","case":"ADD","id":"(xexe4wazirr2)","pattern":"hook:listen,role:transport,type:tcp","name":"","level":"debug","plugin_name":"transport","when":1484504358157}
    {"kind":"add","case":"ADD","id":"(wk7t53z5xxa2)","pattern":"hook:client,role:transport,type:tcp","name":"","level":"debug","plugin_name":"transport","when":1484504358158}
    {"kind":"add","case":"ADD","id":"(lae5eqi9qoum)","pattern":"hook:listen,role:transport,type:web","name":"","level":"debug","plugin_name":"transport","when":1484504358159}
    {"kind":"add","case":"ADD","id":"(bamx4iiflr6w)","pattern":"hook:client,role:transport,type:web","name":"","level":"debug","plugin_name":"transport","when":1484504358161}
    {"kind":"add","case":"ADD","id":"(nh16xlfdm2cr)","pattern":"hook:listen,role:transport,type:http","name":"","level":"debug","plugin_name":"transport","when":1484504358165}
    {"kind":"add","case":"ADD","id":"(o8lz6t2s8hfp)","pattern":"hook:client,role:transport,type:http","name":"","level":"debug","plugin_name":"transport","when":1484504358168}
    {"kind":"add","case":"ADD","id":"(1ssx81gg2mer)","pattern":"hook:listen,role:transport,type:direct","name":"","level":"debug","plugin_name":"transport","when":1484504358172}
    {"kind":"add","case":"ADD","id":"(nmnvlag38wpd)","pattern":"hook:client,role:transport,type:direct","name":"","level":"debug","plugin_name":"transport","when":1484504358178}
    {"kind":"options","case":"SET","options":{"transport":{"msgprefix":"seneca_","callmax":111111,"msgidlen":12,"warn":{"unknown_message_id":true,"invalid_kind":true,"invalid_origin":true,"no_message_id":true,"message_loop":true,"own_message":true},"check":{"message_loop":true,"own_message":true},"web":{"type":"web","port":10101,"host":"0.0.0.0","path":"/act","protocol":"http","timeout":5555,"max_listen_attempts":11,"attempt_delay":222,"serverOptions":{}},"tcp":{"type":"tcp","host":"0.0.0.0","port":10201,"timeout":5555}}},"level":"debug","actid":"vncx7np9g8oa/wpk7ql9fk4vq","plugin_name":"transport","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","when":1484504358179}
    {"kind":"plugin","case":"install","name":"transport","exports":["transport/utils"],"level":"debug","actid":"vncx7np9g8oa/wpk7ql9fk4vq","plugin_name":"transport","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","when":1484504358192}
    {"actid":"vncx7np9g8oa/wpk7ql9fk4vq","msg":{"init":"transport","default$":{},"fatal$":true,"local$":true,"plugin$":{"name":"transport"},"meta$":{"id":"tigkv7wgrcll/f8y0u0gu9x5p","tx":"f8y0u0gu9x5p"}},"meta":{},"listen":false,"transport":{},"kind":"act","case":"DEFAULT","level":"debug","plugin_name":"transport","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","when":1484504358199}
    {"actid":"vncx7np9g8oa/wpk7ql9fk4vq","msg":{"init":"transport","default$":{},"fatal$":true,"local$":true,"plugin$":{"name":"transport"},"meta$":{"id":"tigkv7wgrcll/f8y0u0gu9x5p","tx":"f8y0u0gu9x5p"}},"meta":{},"listen":false,"transport":{},"kind":"act","case":"OUT","duration":3,"result":{},"level":"debug","plugin_name":"transport","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","when":1484504358201}
    {"kind":"plugin","case":"ready","name":"transport","level":"debug","actid":"vncx7np9g8oa/wpk7ql9fk4vq","plugin_name":"transport","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","when":1484504358201}
    {"actid":"vncx7np9g8oa/wpk7ql9fk4vq","msg":{"role":"seneca","plugin":"define","name":"transport","seq":1,"default$":{},"fatal$":true,"local$":true,"plugin$":{"name":"transport"},"meta$":{"id":"vncx7np9g8oa/wpk7ql9fk4vq","tx":"wpk7ql9fk4vq","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","action":"(6koedgyg0o5v)","plugin_name":"transport","plugin_tag":"-","prior":{"chain":[],"entry":true,"depth":0},"start":1484504358138,"sync":false},"tx$":"wpk7ql9fk4vq"},"entry":true,"prior":[],"meta":{"plugin_name":"transport","plugin_tag":"-","plugin_fullname":"transport","raw":{"role":"seneca","plugin":"define","name":"transport","seq":1},"sub":false,"client":false,"args":{"role":"seneca","plugin":"define","name":"transport","seq":1},"rules":{},"id":"(6koedgyg0o5v)","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","msgcanon":{"name":"transport","plugin":"define","role":"seneca","seq":1,"tag":"undefined"},"priorpath":""},"client":false,"listen":false,"transport":{},"kind":"act","case":"OUT","duration":64,"level":"debug","plugin_name":"transport","pattern":"name:transport,plugin:define,role:seneca,seq:1,tag:undefined","when":1484504358202}
    ["fatal log level"]
    ["error log level"]
    ["warn log level"]
    ["info log level"]
    {"comment":"This log entry holds some details","myDetails":"Some specific details","level":"info","when":1484504358205}
    ["info level",{"comment":"This log entry returns with an array, that also holds some details","myDetails":"Some other details"}]
    ["debug log level"]
```

The following two examples controls the log writing through the seneca options.
The `options.log` can be used with shortcuts, and the `options.log.level` with the original names of the log levels.
The following two code fragments provide the same output:


```JavaScript
    const seneca = require('seneca')({
        // 'silent' | 'test' | 'all'
        log: 'test'
    })
```

```JavaScript
    const seneca = require('seneca')({
        log: {
            // 'fatal' | 'error' | 'error+' | 'warn' | 'warn+' | 'info' | 'info+', 'debug', 'debug+'
            level: 'warn+'
        }
    })
```


During logging, the entries handed over to the `seneca.log` function produces an array,
that is formatted for display or storage by a handler function.

Seneca provides a built-in handler function,
that you can also provide (see also: [Implement custom logger](#implement-custom-logger)).

To minimize impact on performance, log data is only evaluated if a matching log filter is active.

### Test mode logging

By default seneca displays the log entries in JSON format.
You can make it more readable with the `test` property of seneca options, that you can set `true` either
with the `options` or through the CLI argument.

The following two examples both switch to test mode:

```JavaScript
const seneca = require('seneca')({
    test: true,
    log: {
        level: 'info+'
    }
})
```

```sh
    node log_levels.js --seneca.log.info+ --seneca.options.test=true
    46:
        { kind: 'notice',
          notice: 'hello seneca xkvujehcnuvg/1484506223263/5046/3.2.2/-',
          level: 'info',
          seneca: undefined,
          when: 1484506223309 }
    ------------------------------------------------


    279:
        [ 'fatal log level',
          level: 'fatal',
          seneca: undefined,
          when: 1484506223542 ]
    ------------------------------------------------


    280:
        [ 'error log level',
          level: 'error',
          seneca: undefined,
          when: 1484506223543 ]
    ------------------------------------------------


    280:
        [ 'warn log level',
          level: 'warn',
          seneca: undefined,
          when: 1484506223543 ]
    ------------------------------------------------


    281:
        [ 'info log level',
          level: 'info',
          seneca: undefined,
          when: 1484506223544 ]
    ------------------------------------------------


    281:
        { comment: 'This log entry holds some details',
          myDetails: 'Some specific details',
          level: 'info',
          seneca: undefined,
          when: 1484506223544 }
    ------------------------------------------------


    281:
        [ 'info level',
          { comment: 'This log entry returns with an array, that also holds some details',
            myDetails: 'Some other details' },
          level: 'info',
          seneca: undefined,
          when: 1484506223544 ]
    ------------------------------------------------
```

## The log format

Seneca creates its log entries as JavaScript objects.

A full log entry:

```JavaScript
{
    "actid":"uejjgvm6ar7p/f0ie6nejirlj",
    "msg": {
        "role":"seneca",
        "cmd":"close",
        "meta$": {
            "id":"uejjgvm6ar7p/f0ie6nejirlj",
            "tx":"f0ie6nejirlj",
            "start":1484124583253,
            "pattern":"cmd:close,role:seneca",
            "action":"(898retz71qkj)",
            "entry":true,
            "chain":[],
            "sync":false,
            "plugin_name":"mem-store",
            "plugin_tag":1
        },
        "plugin$": {
            "name":"mem-store",
            "tag":1
        },
        "tx$":"f0ie6nejirlj"
    },
    "entry":true,
    "prior":[],
    "meta": {
        "plugin_name":"mem-store",
        "plugin_tag":1,
        "plugin_fullname":"mem-store/1",
        "raw": {
            "role":"seneca",
            "cmd":"close"
        },
        "sub":false,
        "client":false,
        "args": {
            "role":"seneca",
            "cmd":"close"
        },
        "rules":{
        },
        "id":"(898retz71qkj)",
        "pattern":"cmd:close,role:seneca",
        "msgcanon": {
            "cmd":"close",
            "role":"seneca"
        },
        "priormeta": {
            "raw": {
                "role":"seneca",
                "cmd":"close"
            },
            "plugin_name":"root$",
            "plugin_fullname":"root$",
            "sub":false,
            "client":false,
            "args": {
                "role":"seneca",
                "cmd":"close"
            },
            "rules":{
            },
            "id":"(f5pas2qm4pjp)",
            "pattern":"cmd:close,role:seneca",
            "msgcanon": {
                "cmd":"close","role":"seneca"},
            "priorpath":""
        },
        "priorpath":"(f5pas2qm4pjp);"
    },
    "client":false,
    "listen":false,
    "transport":{
    },
    "kind":"act",
    "case":"IN",
    "level":"debug",
    "plugin_name":"mem-store",
    "plugin_tag":1,
    "pattern":"cmd:close,role:seneca",
    "seneca":"ced1r5jvllgc/1484124582502/4300/3.1.0/-",
    "when":1484124583255
}
```

Condensed log entry:

```JavaScript
    "actid":"uejjgvm6ar7p/f0ie6nejirlj",
    "msg": {},
    "entry":true,
    "prior":[],
    "meta": {},
    "client":false,
    "listen":false,
    "transport":{},
    "kind":"act",
    "case":"IN",
    "level":"debug",
    "plugin_name":"mem-store",
    "plugin_tag":1,
    "pattern":"cmd:close,role:seneca",
    "seneca":"ced1r5jvllgc/1484124582502/4300/3.1.0/-",
    "when":1484124583255
```
 
## Implement custom logger

By default Seneca includes a logging adaptor that emits JSON based logs.
You can swap out this adaptor for others.


see: [docs/examples/custom-logger.js](../seneca_internals/docs/examples/custom-logger.js)


## References
- [Seneca API reference / log.level([entry, ..])](http://senecajs.org/api/#log-level-entry-)
