Seneca.js CLI arguments
=======================

These are the parameters can be used to control the seneca instance when it is started from the console.


## --seneca.print.options

Prints out useful hints about the actual configuration of the seneca instance.

See [seneca.options](../seneca.options/README.md) for details.


## --seneca.print.tree

    $ node lib/index.js --seneca.print.tree

    {"kind":"notice","notice":"hello seneca jkytay7wl6jx/1484133584737/6457/3.2.2/-","level":"info","when":1484133584768}
    
    Seneca action patterns for instance: jkytay7wl6jx/1484133584737/6457/3.2.2/-

### --seneca.print.tree.all

    $ node lib/index.js --seneca.print.tree.all

    {"kind":"notice","notice":"hello seneca 43gpwnv81gbv/1484133603402/6470/3.2.2/-","level":"info","when":1484133603433}

    Seneca action patterns for instance: 43gpwnv81gbv/1484133603402/6470/3.2.2/-
    ├─┬ cmd:stats
    │ └─┬ role:seneca
    │   └── # root$, (p98z5dwfcnw6), action_seneca_stats
    ├─┬ cmd:close
    │ └─┬ role:seneca
    │   └── # root$, (kr4h2eyyi9dt), action_seneca_close
    ├─┬ cmd:get
    │ └─┬ role:options
    │   └── # root$, (80ug599ulpzi), action_options_get
    ├─┬ cmd:inflight
    │ └─┬ role:transport
    │   └── # transport, (vyp8szjk6f3v), 
    ├─┬ cmd:listen
    │ └─┬ role:transport
    │   └── # transport, (fjs2g0rqka9f), 
    ├─┬ cmd:client
    │ └─┬ role:transport
    │   └── # transport, (unaelz0k4q0j), 
    ├─┬ get:options
    │ └─┬ role:seneca
    │   └── # root$, (aguuxl9kzjne), action_options_get
    ├─┬ hook:listen
    │ └─┬ role:transport
    │   ├─┬ type:tcp
    │   │ └── # transport, (eqioijp0kojz), 
    │   ├─┬ type:web
    │   │ └── # transport, (cccyqp2f0a0v), 
    │   ├─┬ type:http
    │   │ └── # transport, (3hi95o5xyrf3), 
    │   └─┬ type:direct
    │     └── # transport, (qda9avmvrz99), 
    ├─┬ hook:client
    │ └─┬ role:transport
    │   ├─┬ type:tcp
    │   │ └── # transport, (at17o2n6omyl), 
    │   ├─┬ type:web
    │   │ └── # transport, (vbcziqsovqjn), 
    │   ├─┬ type:http
    │   │ └── # transport, (1mjz28dplqdt), 
    │   └─┬ type:direct
    │     └── # transport, (ch2iwohgo19a), 
    ├─┬ info:fatal
    │ └─┬ role:seneca
    │   └── # root$, (3vehrow6o0e1), action_seneca_fatal
    ├─┬ name:transport
    │ └─┬ plugin:define
    │   └─┬ role:seneca
    │     └─┬ seq:1
    │       └── # transport, (tnomekbnsfr6), plugin_definition
    └─┬ role:seneca
      └─┬ stats:true
        └── # root$, (2h48pr9mcpxx), action_seneca_stats

    Application is running...

## --seneca.log

Controls the level of log messages printed to the console.

See [logging](../logging/README.md) for details.

