export IMAGE = node-ci-image
export TAG = latest
export NODE_VERSION = 8.10
export UBUNTU_VERSION = 16.04
export TERRAFORM_VERSION = 0.11.11

export REPO_URI="jcuffney/${IMAGE}:${TAG}"

.DEFAULT_GOAL := build

deploy::

	# deploy route 53 hosted zone
	aws cloudformation deploy \
		--stack-name recipes-hosted-zone \
		--template-file ./hosted_zone.json \
		--parameter-overrides \
			Name=diguisepperecipes.com \
		--region us-east-1

	# deploy api gateway
	# aws cloudformation deploy \
	# 	--stack-name recipes-api-gateway \
	# 	--template-file ./api_gateway.json \
	# 	--parameter-overrides \
	# 		DomainName=api.diguisepperecipes.com \
	# 		HostedZoneId=Z2398FSR0ALHZ2 \
	# 		AcmCertificateArn=arn:aws:acm:us-east-1:255964265911:certificate/ba1d75e1-2e66-4f63-a63f-156314a6762b \
	# 	--region us-east-1 \
	# 	--capabilities CAPABILITY_IAM
			

	# deploy api gateway
	# aws cloudformation deploy \
	# 	--stack-name recipes-api-gateway \
	# 	--template-file ./ecs_microservice.json \
	# 	--region us-east-1

	# deploy ECS cluster
	# aws cloudformation deploy \
	# 	--stack-name kerfuffle-cluster \
	# 	--template-file ./ecs_cluster.json \
	# 	--region us-east-1

	# deploy ECS microservice
	# aws cloudformation deploy \
	# 	--stack-name recipes-graphql-gateway \
	# 	--template-file ./ecs_microservice.json \
	# 	--region us-east-1

	# deploy VPC
	# aws cloudformation deploy \
	# 	--stack-name recipes-graphql-gateway \
	# 	--template-file ./vpc.json \
	# 	--region us-east-1



delete::
	# ecs cluster
	# aws cloudformation delete-stack \
	# 	--stack-name kerfuffle-cluster \
	# 	--region us-east-1

	# ecs microservice
	# aws cloudformation delete-stack \
	# 	--stack-name recipes-graphql-gateway \
	# 	--region us-east-1

	# vpc
	# aws cloudformation delete-stack \
	# 	--stack-name recipes-graphql-gateway \
	# 	--region us-east-1

	# api gateway
	# aws cloudformation delete-stack \
	# 	--stack-name recipes-graphql-gateway \
	# 	--region us-east-1

	# api gateway
	# aws cloudformation delete-stack \
	# 	--stack-name recipes-api-gateway \
	# 	--region us-east-1

	# route 53 hosted zone
	aws cloudformation  delete-stack \
		--stack-name recipes-hosted-zone \
		--region us-east-1

validate::
	# aws cloudformation validate-template \
	# 	--template-body file://./ecs_cluster.json \
	# 	--region us-east-1

	# aws cloudformation validate-template \
	# 	--template-body file://./ecs_microservice.json \
	# 	--region us-east-1

	# aws cloudformation validate-template \
	# 	--template-body file://./vpc.json \
	# 	--region us-east-1

	# aws cloudformation validate-template \
	# 	--template-body file://./api_gateway.json \
	# 	--region us-east-1

	aws cloudformation validate-template \
		--template-body file://./hosted_zone/template.json \
		--region us-east-1