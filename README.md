# Microservices with Docker, Flask, and React

[![Build Status](https://travis-ci.org/perch24/testdriven-app.svg?branch=master)](https://travis-ci.org/perch24/testdriven-app)

# Docker

### Common Commands

Build images:

```docker-compose -f docker-compose-dev.yml build```

Run containers:

```docker-compose -f docker-compose-dev.yml up -d```

Create the database:

```docker-compose -f docker-compose-dev.yml run users python manage.py seed_db```

Seed the database:

```docker-compose -f docker-compose-dev.yml run users python manage.py recreate_db```

### Testing/Coverage/Linting

Run the tests:

```docker-compose -f docker-compose-dev.yml run users python manage.py test```

Run the linter:

```docker-compose -f docker-compose-dev.yml run users flake8 project```
  
Run coverage:

```docker-compose -f docker-compose-dev.yml run users python manage.py coverage```

### Other Commands:

To stop the containers:

```docker-compose -f docker-compose-dev.yml stop```

To bring down the containers:

```docker-compose -f docker-compose-dev.yml down```

Want to force a build?

```docker-compose -f docker-compose-dev.yml build --no-cache```

Remove images:

``docker rmi $(docker images -q)```

### Postgres

Want to access the database via psql?

```docker exec -ti users-db psql -U postgres -W```

Then, you can connect to the database and run SQL queries. For example:

```
# \c users_dev
# select * from users;
```
