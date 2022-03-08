## Fastify API following Clean Architecture principles

The repository is template for starting project with fastify clean architecture.

### Library

- Fastify
- Typescript
- Husky & Lint Staged — Run scripts on your staged files before they are committed
- Jest — Configured for unit testing
- Prettier — Format your code consistently
- Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ESLint — Find and fix problems in your code, also will auto sort your imports
- Absolute Import and Path Alias — Import components using `~/` prefix
- SWC — Build tools

### How To Use

- Clone this repository
- Run `npm install` or `yarn install`
- then run `yarn dev` to run localy

### Testing

`npm run test`

---

## Project anatomy

```
app
 └ src                              → Application sources
    └ application                   → Application services layer
       └ security                   → Security tools interfaces (ex: AccessTokenManager.js, to generate and decode OAuth access token)
       └ use_cases                  → Application business rules
    └ domain                        → Enterprise core business layer such as domain model objects (Aggregates, Entities, Value Objects) and repository interfaces
    └ infrastructure                → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
       └ config                     → Application configuration files, modules and services
          └ constant.ts             → All configuration (Database Hostname, App port, etc)
       └ database                   → Database Connection (pg-promise)
          └ connection.ts           → pg-promise config
       └ repositories               → Implementation of domain repository interfaces
       └ webserver                  → Fastify Web server configuration (server, routes, plugins, etc.)
          └ server.ts               → Fastify server definition
    └ interfaces                    → Adapters and formatters for use cases and entities to external agency such as Database or the Web
       └ controllers                → Fastify route handlers
       └ routes                     → Fastify route definitions
       └ serializers                → Converter objects that transform outside objects (ex: HTTP request payload) to inside objects (ex: Use Case request object)
    └ test                          → Source folder for unit or functional tests
    └ server.ts                     → Main application entry point
 └ node_modules (generated)         → NPM dependencies
```
