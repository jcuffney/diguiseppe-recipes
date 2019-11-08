export STACK_NAME = diguiseppe-hosted-zone
export DOMAIN_NAME = diguisepperecipes.com
export REGION = us-east-1
export TEMPLATE_PATH = ./template.json

.DEFAULT_GOAL := deploy

deploy::
	aws cloudformation deploy \
		--stack-name ${STACK_NAME} \
		--template-file ${TEMPLATE_PATH} \
		--parameter-overrides \
			Name=${DOMAIN_NAME} \
		--region ${REGION}

delete::
	aws cloudformation  delete-stack \
		--stack-name ${STACK_NAME} \
		--region ${REGION}

validate::

	aws cloudformation validate-template \
		--template-body file://${TEMPLATE_PATH} \
		--region ${REGION}
