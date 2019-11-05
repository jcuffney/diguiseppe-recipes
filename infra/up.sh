#! /bin/bash

aws cloudformation deploy \
    --stack-name diguiseppe-recipes-ecs-cluster \
    --template-body file://ecs_cluster.json