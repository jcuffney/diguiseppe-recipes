export STACK_NAME = diguiseppe-api-gateway
export REGION = us-east-1
export TEMPLATE_PATH = ./template.json

export API_SPEC_BUCKET = com.diguisepperecipes.api-spec
export API_SPEC_FILE = openapi.json
export DOMAIN_NAME = api.diguisepperecipes.com
export ACM_CERTIFICATE_ARN = arn:aws:acm:us-east-1:255964265911:certificate/787bf805-e4be-479e-a5dd-2fd738f2c409
export HOSTED_ZONE_ID = Z2398FSR0ALHZ2


.DEFAULT_GOAL := deploy

deploy::
	# ensure the bucket has been created
	aws s3 mb s3://${API_SPEC_BUCKET} --region ${REGION}
	# copy the api specification up to s3
	aws s3 cp ./${API_SPEC_FILE} s3://${API_SPEC_BUCKET}
	# deploy cloudformation stack
	aws cloudformation deploy \
		--stack-name ${STACK_NAME} \
		--template-file ${TEMPLATE_PATH} \
		--parameter-overrides \
			DomainName=${DOMAIN_NAME} \
			HostedZoneId=${HOSTED_ZONE_ID} \
			AcmCertificateArn=${ACM_CERTIFICATE_ARN} \
			ApiSpecBucket=${API_SPEC_BUCKET} \
			ApiSpecKey=${API_SPEC_FILE} \
		--region ${REGION} \
		--capabilities CAPABILITY_IAM

delete::
	aws cloudformation  delete-stack \
		--stack-name ${STACK_NAME} \
		--region ${REGION}
	aws s3 rb s3://${API_SPEC_BUCKET} --region ${REGION} --force

validate::
	aws cloudformation validate-template \
		--template-body file://${TEMPLATE_PATH} \
		--region ${REGION}
