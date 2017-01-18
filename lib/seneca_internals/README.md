Seneca Internals
================

## Investigate and document:

- How are Seneca external and internal modules organized, and how do they work?
- How are plugins managed?
- How does routing work?
- What are the decorators, and how to use them?
  (see: print.js/print_tree(), seneca.list(), [docs/examples/decoration.js](docs/examples/decoration.js), etc...)

## Domain Model

The following image shows the simplified domain model of an application that is using seneca instances:

![Domain Model](seneca-domain-model.png?raw=true)


## Modules and dependencies

The diagram below demonstrates the simplyfied dependencies among the internal modules of seneca as well as their external dependencies:

![Dependency map of seneca modules](seneca-dependency-map-simple.png?raw=true)

You can see also the [full picture of dependencies](seneca-dependency-map.png),
and [a slightly simplified version of the full picture](seneca-dependency-map-multi.png) as well. 

The annotated docs on the internal modules of the seneca.js:
- [seneca.js](https://htmlpreview.github.io/?https://github.com/tombenke/seneca-cookbook/blob/master/lib/seneca_internals/docs/annotated/seneca.html):
  The seneca main module.
- [lib/actions.js](https://htmlpreview.github.io/?https://github.com/tombenke/seneca-cookbook/blob/master/lib/seneca_internals/docs/annotated/actions.html):
  TBD.
- [lib/common.js](https://htmlpreview.github.io/?https://github.com/tombenke/seneca-cookbook/blob/master/lib/seneca_internals/docs/annotated/common.html):
  TBD.
- [lib/errors.js](https://htmlpreview.github.io/?https://github.com/tombenke/seneca-cookbook/blob/master/lib/seneca_internals/docs/annotated/errors.html):
  Error messages in the form of template strings.
- [lib/legacy.js](https://htmlpreview.github.io/?https://github.com/tombenke/seneca-cookbook/blob/master/lib/seneca_internals/docs/annotated/legacy.html)
  TBD.
- [lib/logging.js](https://htmlpreview.github.io/?https://github.com/tombenke/seneca-cookbook/blob/master/lib/seneca_internals/docs/annotated/logging.html)
  TBD.
- [lib/optioner.js](https://htmlpreview.github.io/?https://github.com/tombenke/seneca-cookbook/blob/master/lib/seneca_internals/docs/annotated/optioner.html)
  Managing the seneca options for the core modul, including the loading from several sources and overriding in the predefined order.
- [lib/plugins.js](https://htmlpreview.github.io/?https://github.com/tombenke/seneca-cookbook/blob/master/lib/seneca_internals/docs/annotated/plugins.html)
  TBD.
- [lib/print.js](https://htmlpreview.github.io/?https://github.com/tombenke/seneca-cookbook/blob/master/lib/seneca_internals/docs/annotated/print.html)
  Print out the action patterns tree, and the options to the console.

The external modules used by Seneca.js:


- [Node API](https://nodejs.org/dist/latest-v7.x/docs/api/) modules: [events](https://nodejs.org/api/events.html), [util](https://nodejs.org/api/util.html), [assert](https://nodejs.org/api/assert.html), [fs](https://nodejs.org/api/fs.html).
- [archy](https://github.com/substack/node-archy): render nested hierarchies `npm ls` style with unicode pipes.
- [eraro](https://github.com/rjrodger/eraro): Create JavaScript Error objects with code strings, context details, and templated messages.
- [gate-executor](https://github.com/rjrodger/gate-executor): A work queue that can be gated, stopping to wait for sub-queues to complete.
- [gex](https://github.com/rjrodger/gex): Glob expressions for JavaScript (referred only from package.json).
- [json-strigify-safe](https://github.com/e-conomic/safe-json-stringify): Prevent defined property getters from throwing errors.
- [jsonic](https://github.com/rjrodger/jsonic): A JSON parser that isn't strict.
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [lru-cache](https://github.com/isaacs/node-lru-cache): A cache object that deletes the least-recently-used items.
- [minimist](https://github.com/substack/minimist): parse argument options.
- [nid](https://github.com/rjrodger/nid): Nice clean-mouthed random id generation, without any swearing!
- [norma](https://github.com/rjrodger/norma): A function argument organizer.
- [ordu](https://github.com/rjrodger/ordu): Execute functions in a configurable order, modifying a shared data structure.
  Task functions are executed in order of addition, and passed a shared context, and a modifiable data structure. Execution is synchronous. You can exit early by returning a non-null value from a task function.
  You can tag task functions, and restrict execution to the subset of task functions with matching tags.
  It is used to provide configurable extension hooks for Seneca.
- [patrun](https://github.com/rjrodger/patrun): A fast pattern matcher on JavaScript object properties.
  It's basically query-by-example for property sets, that picks out an object based on a subset of its properties.
- [rolling-stats](https://github.com/rjrodger/rolling-stats): Rolling statistics.
- [seneca-log-filter](https://github.com/senecajs/seneca-log-filter): Seneca log filtering module.
- [semver](https://github.com/npm/node-semver): The semantic version parser used by npm. (referred only from package.json).
- [use-plugin](https://github.com/rjrodger/use-plugin): Generic plugin loader functionality for Node.js frameworks.

## Message Transport

See also: [docs/msg-transport-protocol](docs/msg-transport-protocol.md)
