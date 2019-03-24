# MEDWING BE #

## How to Run ##
- Clone Repository
- `npm i`
- `npm run start` (this will run app in development mode)

## Tech Stack ##
- Node / Express JS
- Mongodb / Mongoose

## Folder Structure ##
- Modules, all application modules will go here, e.g. marker
- Each module will have respectiv controller, model, routes file
- common, to keep track of common things e.g. config, const, db config

**Note** - for production mode, application will expect some env variables including MODE, PORT, DB_URL