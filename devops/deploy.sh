#!/bin/bash
mkdir -p /var/jenkins/kpi.co-website/ || true
if [[ $2 == "development" ]] ; then
	mv deploy-files/docker-compose-dev.yaml /var/jenkins/kpi.co-website/docker-compose.yaml
# elif [[ $2 == "master" ]] ; then
# 	mv deploy-files/docker-compose-prod.yaml /var/jenkins/kpi.co-website/docker-compose.yaml
else
	echo "Branch not mapped to any environment"
	exit 1
fi
count=`docker ps | wc -l`
if [ "$count" -eq "1" ] ; then
	cd /var/jenkins/kpi.co-website/ && docker-compose up -d
else
    cd /var/jenkins/kpi.co-website/ && docker-compose up -d --build $1
fi