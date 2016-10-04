# Docker Boilerplate
## From development to production with Docker

This project is a small boilerplate to start developing inside docker,
includes both production and development configurations with NodeJS as a frontend service and MongoDB as database. But is highly customizable with other languages or databases.

### Run Project
```
# Run in development enviroment
# Root folder will be mounted as a volumen and changes are watched by nodemon
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
# Also available as
npm run dev

# Run in production
docker-compose up
```

### Troubleshooting

Installing a NPM package inside frontend
```
docker exec -it dockercomposenodedbboilerplate_frontend_1 /bin/bash
npm i express --save
```

While in developer enviroment you get an "Cannot find module..."
```
# Enter running container and run npm install
docker exec -it dockercomposenodedbboilerplate_frontend_1 npm install
```