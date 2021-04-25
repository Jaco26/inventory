# ECIMS
Experimental Communal Inventory Management System

## Quick Setup

System Requirements
- Node.js (I'm using v14.4.0)
- PostgreSQL (I'm using v13.1)

```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev:client

nom run dev:server
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Project Structure
```
src/
  client/
    assets/         
    components/
    providers/
    router/
    views/
  server/
    api/
    database/
      models/
      queries/
```