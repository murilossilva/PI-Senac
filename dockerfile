FROM mysql:5.7

ADD ./init/CreateDatabase.sql /docker-entrypoint-initdb.d