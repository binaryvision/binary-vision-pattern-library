# Styleguide

`npm install`

Build styleguide and serve up locally for testing

`npm start`

Rebuild styleguide

`npm run build`

Just rebuild styles

`npm run less`

## Deployment

Hosted on S3 on Oscar's personal AWS account so only he can deploy

`npm run deploy`

(Requires you have https://github.com/laurilehmijoki/s3_website installed - `gem install s3_website`. And also requires that you have a `.env` file in the styleguide folder with the S3_ID and S3_SECRET keys defined for the correct AWS credentials.)
