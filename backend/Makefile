 
.PHONY: default all build clean database

default: build all

build:
	@docker-compose build --no-cache

all:
	@docker-compose up backend

database:
	@docker-compose up -d postgres

clean:
	@docker-compose down --rmi all