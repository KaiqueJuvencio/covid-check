#!/bin/sh

node_modules/.bin/sequelize db:migrate --config src/database/config.js --migrations-path src/database/migrations/
node_modules/.bin/sequelize db:seed:all --config src/database/config.js --seeders-path src/database/seeders/

node src/bin/server.js