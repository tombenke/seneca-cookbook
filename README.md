Seneca Cook-book
================

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coveralls][BadgeCoveralls]][Coveralls]

This is a continuously growing collection of readings, notes, and experimental code fragments
I have collected during developing applications with Seneca.js.

Note: This stuff was made with seneca v3.2.2.

- [Boilerplates (project archetypes)](archetypes/README.md)
- [How to use CLI arguments with seneca?](lib/cli-arguments/README.md)
- [How to configure seneca instances and plugins?](lib/seneca.options/README.md)
    - What are the built-in, default options?
    - How can I use the `seneca.options.js` to define options?
    - How can I define options through the environment?
    - How are the default, global options defined?
    - What is FATAL_OPTIONS_FILE?

- [Logging with seneca](lib/logging/README.md)
- [The seneca.util functions](lib/seneca.util/README.md)

## TODOs and open questions to clarify:

- How can I activate the `seneca.print.tree` directly from code?
- Write experimental code for the fundamental communication patterns (sync/async, observer/consumer).
- How can I (semi-)automatically verify the execution of a whole business scenario (semantic monitoring, dead letters, etc.)?
  Implement a logger plugin/post processor for it.

## Installation

Run the install command:

    npm install

Run tests:

    npm test

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

