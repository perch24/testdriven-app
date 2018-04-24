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

Run the tests:

```docker-compose -f docker-compose-dev.yml run users python manage.py test```

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