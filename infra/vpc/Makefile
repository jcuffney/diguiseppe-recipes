export STACK_NAME = diguiseppe-vpc
export REGION = us-east-1
export TEMPLATE_PATH = ./template.json

.DEFAULT_GOAL := deploy

export VPC_NAME = diguiseppe-vpc

deploy::
	aws cloudformation deploy \
		--stack-name ${STACK_NAME} \
		--template-file ${TEMPLATE_PATH} \
		--parameter-overrides \
			Name=${VPC_NAME} \
		--region ${REGION}

delete::
	aws cloudformation  delete-stack \
		--stack-name ${STACK_NAME} \
		--region ${REGION}

validate::

	aws cloudformation validate-template \
		--template-body file://${TEMPLATE_PATH} \
		--region ${REGION}
