 
.PHONY: default all clean database

default: all

all:
	sudo docker-compose up --build backend

database:
	sudo docker-compose up -d postgres

clean:
	sudo docker-compose down --rmi all