#!/bin/bash

PROJECTS=('database' 'person-service' 'front-end')

NETWORK="interview"

if [ "$1" != "down" ]; then
	docker network create "$NETWORK"

	for project in "${PROJECTS[@]}"; do
		cd "$project" && {
			make all && docker-compose up -d
			cd .. || exit
		}
	done
else
	docker network remove "$NETWORK"

	for project in "${PROJECTS[@]}"; do
		cd "$project" && {
			docker-compose down
			cd .. || exit
		}
	done
fi



