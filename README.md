Seneca Cookbook
===============

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coveralls][BadgeCoveralls]][Coveralls]

This is a continuously growing collection of readings, notes, and experimental code fragments
I have collected during developing applications with Seneca.js.

Note: This stuff was made with seneca v3.2.2.

## Installation

In order to run the sample programs, you have to install the dependencies.

Run the install command:

    npm install

Run tests:

    npm test

## Topics and Recipes

- [Seneca internals](lib/seneca_internals/README.md)
- [Boilerplates (project archetypes) to create applications and plugins.](lib/archetypes/README.md)
- [How to use CLI arguments with seneca?](lib/cli-arguments/README.md)
- [How to configure seneca instances and plugins?](lib/seneca.options/README.md)
- [Logging with seneca](lib/logging/README.md)
- [The seneca.util functions](lib/seneca.util/README.md)


## TODOs and open questions to clarify

### Testing, debugging, tracing, monitoring
- How to do testing and debugging?
    - unit test patterns, and support features,
    - debug configs and their usage.
    - Actions and patterns (seneca.list()?)
- How to write log status at periodic intervals? (see: `options.status.interval`)
- How can I (semi-)automatically verify the execution of a whole business scenario (semantic monitoring, dead letters, etc.)?
  Implement a logger plugin/post processor for it.
- How does the `options.trace: {}` work?
- How does `options.system.catchall: true` works? 

### Config, Start, stop
- How to control timeouts?
    - `options.timeout`, Standard timeot for actions,
    - other timeouts...
- How to make a managed, graceful shutdown?
    - `options.close_signals`, 
    - `options.deathdelay: 11111`, Wait time for plugins to close gracefully.
   For example, you can set it on Heroku to the known value.)

### Design and implement microservices
- business level specs. vs. deployment specs.
- useful diagrams and design process.
- A DSL for documenting and scaffolding microservices, using JavaScript macros.
- Write experimental code for the fundamental communication patterns (sync/async, observer/consumer).
- How can I activate the `seneca.print.tree` directly from code?
- Write basic samples on how to use entities.

## References

- [Seneca.js](http://senecajs.org/)
- [How to Write a Seneca Plugin](http://senecajs.org/docs/tutorials/how-to-write-a-plugin.html)

---

This project was generated from the [seneca-plugin-archetype](https://github.com/tombenke/seneca-plugin-archetype)
by the [kickoff](https://github.com/tombenke/kickoff) utility.

[npm-badge]: https://badge.fury.io/js/seneca-cookbook.svg
[npm-url]: https://badge.fury.io/js/seneca-cookbook
[travis-badge]: https://api.travis-ci.org/tombenke/seneca-cookbook.svg
[travis-url]: https://travis-ci.org/tombenke/seneca-cookbook
[Coveralls]: https://coveralls.io/github/tombenke/?branch=master
[BadgeCoveralls]: https://coveralls.io/repos/github/tombenke//badge.svg?branch=master

