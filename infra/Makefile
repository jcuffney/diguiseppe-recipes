export IMAGE = node-ci-image
export TAG = latest
export NODE_VERSION = 8.10
export UBUNTU_VERSION = 16.04
export TERRAFORM_VERSION = 0.11.11

export REPO_URI="jcuffney/${IMAGE}:${TAG}"

.DEFAULT_GOAL := build

deploy::
	# deploy ECS cluster
	# aws cloudformation deploy \
	# 	--stack-name kerfuffle-cluster \
	# 	--template-file ./ecs_cluster.json \
	# 	--region us-east-1

	# deploy ECS microservice
	aws cloudformation deploy \
		--stack-name recipes-graphql-gateway \
		--template-file ./ecs_microservice.json \
		--region us-east-1

delete::
	# aws cloudformation delete-stack \
	# 	--stack-name kerfuffle-cluster \
	# 	--region us-east-1

	aws cloudformation deploy \
		--stack-name recipes-graphql-gateway \
		--template-file ./ecs_microservice.json \
		--region us-east-1