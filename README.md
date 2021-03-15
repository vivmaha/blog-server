[![CI](https://github.com/vivmaha/blog-server/actions/workflows/main.yml/badge.svg)](https://github.com/vivmaha/blog-server/actions/workflows/main.yml)

# blog-server

Server for Blog

## Deployment

The production server is hosted on AWS, and gets deployed automatically upon
a push to master.

You can also deploy to the dev stack for testing:

- Create an AWS IAM Profile with the following AWS Managed Policies:
  - IAMFullAccess
  - AmazonS3FullAccess
  - CloudWatchLogsFullAccess
  - AWSCloudFormationFullAccess
  - AWSLambda_FullAccess
  - AmazonAPIGatewayAdministrator
  - AmazonDynamoDBFullAccess
- Using the key and secret from the above profile, run:

  `npm run sls -- config credentials --provider aws --key [key] --secret [secret]`

- `npm run sls -- deploy --stage dev`

## Development

`./bin` has some manual scripts that may be useful. Run them with
`npx ts-node ./bin/[script].ts`.
