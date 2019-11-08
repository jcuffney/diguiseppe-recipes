export STACK_NAME = diguiseppe-cloudwatch-dashboard
export REGION = us-east-1
export TEMPLATE_PATH = ./template.json

.DEFAULT_GOAL := deploy

export DASHBOARD_BODY = diguiseppe-recipes
export DASHBOARD_NAME = diguiseppe-recipes

deploy::
	# build cloudformation template
	node build_dashboard.js > template.json
	# deploy cloudformation template
	aws cloudformation deploy \
		--stack-name ${STACK_NAME} \
		--template-file ${TEMPLATE_PATH} \
		--parameter-overrides \
			DashboardName=${DASHBOARD_NAME} \
			DashboardBody=${DASHBOARD_BODY} \
		--region ${REGION}

delete::
	aws cloudformation  delete-stack \
		--stack-name ${STACK_NAME} \
		--region ${REGION}

validate::

	aws cloudformation validate-template \
		--template-body file://${TEMPLATE_PATH} \
		--region ${REGION}
