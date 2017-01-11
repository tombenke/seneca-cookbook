Logging
=======

## Log levels

      level              aliases
      
    +-------+ +-----------------------------+
    | none  | |           silent            |
    +=======+ +=============================+
    | fatal | |        |           |        |
    +-------+ | test,  |           |        |
    | error | | error+ |           |        |
    +-------+ +--------+           |        |
    | warn  |          | (default) |        |
    +-------+          | standard, |        |
    | info  |          | info+     | any,   |
    +-------+          +-----------+ print, |
    | debug |                      | debug+ |
    +-------+                      +--------+


## The --seneca.log CLI argument

Controls the level of log messages printed to the console.

Supported Seneca log levels are: `debug`, `info`, `warn`, `error`, `fatal`

Seneca logging arguments:

    --seneca.log.quiet - no log output
    --seneca.log.silent - no log output

    --seneca.log.all - log everything, alias for `debug+` level
    --seneca.log.any - log everything, alias for `debug+` level
    --seneca.log.print - log everything, alias for `debug+` level

    --seneca.log.test alias for `error+` level
    --seneca.log.standard` alias for `info+` level

Deprecated logging arguments:

    --seneca.log=plugin:foo bar // space works as val separator
    --seneca.log=level:info,type:plugin,handler:print

## The log format

A full log entry:

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

Condensed log entry:

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


### logspec.aliases ???

    'quiet' => 'none'
    'any' => 'debug+'
    'print' => 'debug+'
    'standard' => 'info+'
  


### Examples for seneca.log call

    instance.log.warn({
        kind: 'act',
        case: 'DEPRECATED',
        pattern: actmeta.pattern,
        notice: actmeta.deprecate,
        callpoint: act_callpoint})
    }


    self.log.debug({
        kind: 'add',
        case: actmeta.sub ? 'SUB' : 'ADD',
        id: actmeta.id,
        pattern: actmeta.pattern,
        name: action.name,
        callpoint: callpoint
    })

### log.level([entry, ..])

    The `log.level` method set provides the ability to log directly off the Seneca instance.
    By default Seneca includes a logging adaptor that emits JSON based logs.
    You can swap out this adaptor for others.

Params:

- entry - string or object or array: The data to be logged.

Configuring a warn log level in Seneca:

    var seneca = Seneca({
      log: { level: 'warn+' }
    })
    seneca.log.debug('debug log level')
    seneca.log.info('info log level')
    seneca.log.warn('warn log level')
    seneca.log.error('error log level')
    seneca.log.fatal('fatal log level')

    // Output:
    // ["warn log level"]
    // ["error log level"]
    // ["fatal log level"]
    
Configuring a test log level in Seneca:

    var seneca = Seneca({
      log: 'test'
    })

Object logging, JSON output:

    var seneca = Seneca({
      log: { level: 'error+' }
    })
    seneca.log.warn({notice: 'warn log level'})
    seneca.log.error({notice: 'error log level'})
    seneca.log.fatal({notice: 'fatal log level'})

    // Output:
    // {"notice":"error log level","level":"error","seneca":"c8i.../147.../13586/3.0.0/-","when":1472737155055}
    // {"notice":"fatal log level","level":"fatal","seneca":"c8i.../147.../13586/3.0.0/-","when":1472737155060}

Notes

Supported log levels are: `debug`, `info`, `warn`, `error`, `fatal`

Logging supports `level+` syntax: `info+` means `info` and above: `info`, `warn`, `error`, `fatal`

Convenience shortcut log levels:

- `all`: sets log level to `debug+`,
- `silent`: sets log level to `none`,
- `test`: represents the `error+` level

The default logging level is `info+`.
