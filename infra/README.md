# Infrastructure

## AWS Patterns Roadmap

- [ ] hosted zone
  - [x] hosted zone
  - [x] certificate
- [ ] api gateway
  - [x] openapi 3.0
  - [x] hosted documenation (local only)
- [ ] transactional email
  - [ ] SES domain configuration
  - [ ] sample email
- [x] pub-sub
  - [x] SNS
- [x] Cloudwatch Dashboard Base
- VPC
- lambda (nodejs|python) microservice (ApiGateway Event, SQS)
- S3 Bucket (media/build artifacts)
- Authentication via (auth0|okta|cognito)
- ElasticSearch / Kibana
- ecs cluster
- ecs (nodejs|python|php|react|craftcms|jira) microservice
  - autoscaling
  - run as evergreen process, scheduled process, queue polling
- Cloudwatch Dashbaords
  - ECS Cluster
  - Emails Sent
  - Logging / Auditing
  - XRay
  - AppMesh
- api gateway authorizer

## Other Patterns

- Zapier
- Slack
  CircleCI

## Models

- Each microservice should be responsible for it's own model.
  - generates it's graphql schema from it's json schema
  - when deployed...publish a "service:<>:updated" event to rebuild api specification and deploy api gateway
  - each microservice should be responsible to it's own monitoring resources (should be able to hook into cloudwatch dashboards)
  - each microservice should be responsible for it's own secrets.
  - data layer should be completely managed (rds, dynamodb, elasticsearch); althought I can start them initially in docker containers to save resources.
