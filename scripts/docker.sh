#!/bin/bash

PROJECTS=('database' 'person-service' 'front-end')

for project in "${PROJECTS[@]}"; do
	cd "$project" && {
		make all && docker-compose up -d
		cd .. || exit
	}
done



