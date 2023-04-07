SHELL=/bin/bash

build:
	docker-compose build

up:
	USER_NAME=$(shell id -nu) USER_ID=$(shell id -u) GROUP_NAME=$(shell id -ng) GROUP_ID=$(shell id -g) docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

ps:
	docker ps

shell:
	docker-compose exec next /bin/bash


