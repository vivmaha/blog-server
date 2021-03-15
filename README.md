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

## Upload Content

> This is a way too manual, especially since I have de-normalized data.
> A decent next step would be add an authoring experience.

Add data for articles into `ArticlesTable`.

Add data for series into `SeriesTable`.

Optimize Images (see below) and add them to `PublicBucket`.

### Optimize Images

1. Crop to a max-width of 1600px
2. Compress to a bit level of 8
3. Upload both the original `<name>-original.jpeg` and the compressed `<name>.web-optimized.jpeg` to the `PublicBucket` S3 Bucket.
